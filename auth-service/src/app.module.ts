import { Module } from '@nestjs/common';
import { AuthModule } from '@auth';
import { StopModule } from '@core/stop';
import { LoggerModule } from '@core/logger';
import { GrqhpqlModule } from '@core/graphql';

@Module({
   imports: [
      AuthModule,
      StopModule,
      LoggerModule,
      GrqhpqlModule,
   ],
})
export class AppModule {}
