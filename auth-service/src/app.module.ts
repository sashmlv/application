import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrqhpqlModule } from '@core/graphql';

@Module({
   imports: [
      GrqhpqlModule,
   ],
   controllers: [
      AppController,
   ],
   providers: [
      AppService
   ],
})
export class AppModule {}
