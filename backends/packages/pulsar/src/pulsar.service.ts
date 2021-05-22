import { Injectable } from '@nestjs/common';

@Injectable()
export class PulsarService {

   log() {
      console.log( 'PULSAR' );
   }
}
