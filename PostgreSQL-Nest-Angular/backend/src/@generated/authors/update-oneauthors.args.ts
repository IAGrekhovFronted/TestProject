import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsUpdateInput } from './authors-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { authorsWhereUniqueInput } from './authors-where-unique.input';

@ArgsType()
export class UpdateOneauthorsArgs {
  @Field(() => authorsUpdateInput, { nullable: false })
  @Type(() => authorsUpdateInput)
  data!: authorsUpdateInput;

  @Field(() => authorsWhereUniqueInput, { nullable: false })
  @Type(() => authorsWhereUniqueInput)
  where!: Prisma.AtLeast<authorsWhereUniqueInput, 'id'>;
}
