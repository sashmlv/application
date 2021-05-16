import { Module } from '@nestjs/common';
import { AuthModule } from '@auth';
import { StopModule } from '@core/stop';
import { GrqhpqlModule } from '@core/graphql';

@Module({
   imports: [
      AuthModule,
      StopModule,
      GrqhpqlModule,
   ],
})
export class AppModule {}
