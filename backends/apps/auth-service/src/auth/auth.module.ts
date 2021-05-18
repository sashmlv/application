import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';

import { PulsarService } from '@packages/pulsar';

@Module({
  providers: [
    AuthResolver,
  ],
})
export class AuthModule {}
