import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsWhereInput } from './authors-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyauthorsArgs {
  @Field(() => authorsWhereInput, { nullable: true })
  @Type(() => authorsWhereInput)
  where?: authorsWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
