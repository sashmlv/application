import { Module } from '@nestjs/common';
import { PulsarService } from './pulsar.service';

@Module({
  providers: [PulsarService],
  exports: [PulsarService],
})
export class PulsarModule {}
