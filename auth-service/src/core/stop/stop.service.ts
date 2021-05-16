import { Injectable } from '@nestjs/common';

@Injectable()
export class StopService {

   constructor() {

      process.on('SIGINT', () => process.exit(2));

      process.on('SIGTERM', () => process.exit(15));

      process.on('uncaughtException', (err: Error) => {
         console.error(`Uncaught Exception: ${err.message}`);
         console.error(err);
         process.exit(1);
      });

      process.on('unhandledRejection', (err: Error, promise: Promise<any>) => {
         console.error(`Unhandled Rejection: ${promise}`);
         console.error(err);
         process.exit(1);
      });
   }
}
