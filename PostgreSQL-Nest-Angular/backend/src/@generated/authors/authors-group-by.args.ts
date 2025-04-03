import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsWhereInput } from './authors-where.input';
import { Type } from 'class-transformer';
import { authorsOrderByWithAggregationInput } from './authors-order-by-with-aggregation.input';
import { AuthorsScalarFieldEnum } from '../prisma/authors-scalar-field.enum';
import { authorsScalarWhereWithAggregatesInput } from './authors-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class authorsGroupByArgs {
  @Field(() => authorsWhereInput, { nullable: true })
  @Type(() => authorsWhereInput)
  where?: authorsWhereInput;

  @Field(() => [authorsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<authorsOrderByWithAggregationInput>;

  @Field(() => [AuthorsScalarFieldEnum], { nullable: false })
  by!: Array<`${AuthorsScalarFieldEnum}`>;

  @Field(() => authorsScalarWhereWithAggregatesInput, { nullable: true })
  having?: authorsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
