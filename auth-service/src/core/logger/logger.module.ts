import {
   Global,
   Logger,
   Module,
} from '@nestjs/common';

@Global()
@Module({
   exports: [
      Logger,
   ],
   providers:[
      Logger,
   ],
})
export class LoggerModule {}
