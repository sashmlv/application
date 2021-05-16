import {
   Field,
   InputType,
} from '@nestjs/graphql';
import {
   Length,
   IsEmail,
   IsString,
} from 'class-validator';

@InputType()
export class SigninInput {

   @Field()
   @IsString()
   @Length(1, 100)
   login: string;

   @Field()
   @IsEmail()
   email: string;

   @Field()
   @IsString()
   @Length(7, 150)
   password: string;
}
