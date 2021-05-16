import { Module } from '@nestjs/common';
import { AuthModule } from '@auth';
import { StopModule } from '@core/stop';
import { LoggerModule } from '@core/logger';
import { ConfigModule } from '@core/config';
import { GrqhpqlModule } from '@core/graphql';

@Module({
   imports: [
      AuthModule,
      StopModule,
      LoggerModule,
      ConfigModule,
      GrqhpqlModule,
   ],
})
export class AppModule {}
