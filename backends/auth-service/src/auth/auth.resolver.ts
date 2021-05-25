import { UsersModel } from './models';
import { TokensModel } from './models';
import {
   SignupInput,
   SigninInput,
} from './inputs';
import {
   Args,
   Query,
   Mutation,
   Resolver,
} from '@nestjs/graphql';

@Resolver()
export class AuthResolver {

   @Mutation(() => UsersModel)
   async signup(
      @Args('args') args: SignupInput
   ): Promise<UsersModel> {
      return;
   }

   @Query(() => TokensModel)
   async signin(
      @Args('args') args: SigninInput,
   ): Promise<TokensModel> {
      return;
   }

   @Query(() => UsersModel)
   async signout(
   ): Promise<UsersModel> {
      return;
   }
}
