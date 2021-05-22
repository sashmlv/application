import {
   Field,
   ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class TokensModel {

   @Field()
   access: string;

   @Field()
   refresh: string;
}
