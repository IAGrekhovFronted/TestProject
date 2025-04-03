import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsUpdateManyMutationInput } from './authors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { authorsWhereInput } from './authors-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyauthorsArgs {
  @Field(() => authorsUpdateManyMutationInput, { nullable: false })
  @Type(() => authorsUpdateManyMutationInput)
  data!: authorsUpdateManyMutationInput;

  @Field(() => authorsWhereInput, { nullable: true })
  @Type(() => authorsWhereInput)
  where?: authorsWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
