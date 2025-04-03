import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsCreateInput } from './authors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneauthorsArgs {
  @Field(() => authorsCreateInput, { nullable: true })
  @Type(() => authorsCreateInput)
  data?: authorsCreateInput;
}
