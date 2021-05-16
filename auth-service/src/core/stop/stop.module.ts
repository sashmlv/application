import { Module } from '@nestjs/common';
import { StopService } from './stop.service';

@Module({
   exports: [
      StopService,
   ],
   providers:[
      StopService,
   ],
})
export class StopModule {
}
