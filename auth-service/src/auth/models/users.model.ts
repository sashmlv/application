import {
   Field,
   ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class UsersModel {

   @Field()
   login: string;

   @Field()
   email: string;

   @Field()
   password: string;
}
