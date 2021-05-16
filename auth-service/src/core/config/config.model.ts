import {
   IsEnum,
   IsNumber,
   IsString,
   ValidateIf,
} from 'class-validator';

export enum Environment {
   Test = 'test',
   Provision = 'provision',
   Production = 'production',
   Development = 'development',
}

export enum Logger {
   Nest = 'nest',
   Winston = 'winston',
}

export class ConfigModel {

   @IsEnum(Environment)
   NODE_ENV: Environment;

   @IsString()
   HOST: string;

   @IsNumber()
   PORT: number;

   @IsEnum(Logger)
   @ValidateIf((o, v) => v !== '')
   LOGGER: Logger;
}
