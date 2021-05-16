import 'source-map-support/register';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import {
   FastifyAdapter,
   NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
   format,
   transports,
 } from 'winston';

async function bootstrap() {

   const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {
         logger: WinstonModule.createLogger({
            format: format.combine(
               format.json()
            ),
            transports: [new transports.Console()]
         })
      }
   );
   await app.listen(3000);
}
bootstrap();
