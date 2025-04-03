import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { authorsWhereUniqueInput } from './authors-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneauthorsArgs {
  @Field(() => authorsWhereUniqueInput, { nullable: false })
  @Type(() => authorsWhereUniqueInput)
  where!: Prisma.AtLeast<authorsWhereUniqueInput, 'id'>;
}
