import 'source-map-support/register';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { ConfigService } from '@nestjs/config';
import {
   format,
   transports,
 } from 'winston';
import {
   Transport,
   MicroserviceOptions,
} from '@nestjs/microservices';
import {
   FastifyAdapter,
   NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {

   const winston = process.env.LOGGER === 'winston';
   const logger = winston ?
      WinstonModule.createLogger({
         format: format.combine(
            format.json()
         ),
         transports: [new transports.Console()]
      }) :
      new Logger();

   const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {
         logger
      }
   );
   const config = app.get(ConfigService);
   const host = config.get<string>('HOST');
   const port = config.get<string>('PORT');

   const microservice = app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.KAFKA,
      options: {
         client: {
            brokers: ['localhost:9092'],
         }
      }
   });

   await app.startAllMicroservicesAsync();

   await app.listen(port, host, (err: Error, address: string) => {

      if (err) {

         logger.error(err);
         return;
      }

      logger.log(`Server listen at: ${address}`);
   });
}
bootstrap();
