import { Module } from '@nestjs/common';
import { ComplexityPlugin } from './complexity.plugin';
import {
   GraphQLModule,
   GraphQLSchemaHost,
} from '@nestjs/graphql';

@Module({
   providers: [ComplexityPlugin],
   imports: [
      GraphQLModule.forRootAsync({
         inject: [],
         imports: [],
         useFactory: () => {

            return {
               sortSchema: true,
               autoSchemaFile: true,
               buildSchemaOptions: {
                  dateScalarMode: 'timestamp',
               },
               // formatError,
               path: '/auth',
            }
         }
      }),
      GraphQLSchemaHost,
   ],
})
export class GrqhpqlModule {
}
