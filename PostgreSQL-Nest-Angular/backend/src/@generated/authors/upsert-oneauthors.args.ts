import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { authorsWhereUniqueInput } from './authors-where-unique.input';
import { Type } from 'class-transformer';
import { authorsCreateInput } from './authors-create.input';
import { authorsUpdateInput } from './authors-update.input';

@ArgsType()
export class UpsertOneauthorsArgs {
  @Field(() => authorsWhereUniqueInput, { nullable: false })
  @Type(() => authorsWhereUniqueInput)
  where!: Prisma.AtLeast<authorsWhereUniqueInput, 'id'>;

  @Field(() => authorsCreateInput, { nullable: false })
  @Type(() => authorsCreateInput)
  create!: authorsCreateInput;

  @Field(() => authorsUpdateInput, { nullable: false })
  @Type(() => authorsUpdateInput)
  update!: authorsUpdateInput;
}
