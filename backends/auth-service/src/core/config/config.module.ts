import { Module } from '@nestjs/common';
import { ConfigModule as CM } from '@nestjs/config';
import { validate } from './config.validate';

@Module({
   imports: [
      CM.forRoot({
         isGlobal: true,
         envFilePath: [
            '.env'
         ],
         validate,
      }),
   ],
})
export class ConfigModule {}
