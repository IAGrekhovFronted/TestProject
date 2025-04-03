import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsWhereInput } from './authors-where.input';
import { Type } from 'class-transformer';
import { authorsOrderByWithRelationInput } from './authors-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { authorsWhereUniqueInput } from './authors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorsScalarFieldEnum } from '../prisma/authors-scalar-field.enum';

@ArgsType()
export class FindFirstauthorsOrThrowArgs {
  @Field(() => authorsWhereInput, { nullable: true })
  @Type(() => authorsWhereInput)
  where?: authorsWhereInput;

  @Field(() => [authorsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<authorsOrderByWithRelationInput>;

  @Field(() => authorsWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<authorsWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [AuthorsScalarFieldEnum], { nullable: true })
  distinct?: Array<`${AuthorsScalarFieldEnum}`>;
}
