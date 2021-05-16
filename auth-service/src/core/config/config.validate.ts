import { ConfigModel } from './config.model';
import { validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

export function validate(config: Record<string, unknown>) {

   const validatedConfig = plainToClass(
      ConfigModel,
      config,
      { enableImplicitConversion: true },
   );

   const errors = validateSync(
      validatedConfig,
      { skipMissingProperties: false }
   );

   if (errors.length > 0) {
      throw new Error(errors.toString());
   }

   return validatedConfig;
}
