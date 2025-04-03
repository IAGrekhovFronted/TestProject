import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { authorsCountOrderByAggregateInput } from './authors-count-order-by-aggregate.input';
import { authorsAvgOrderByAggregateInput } from './authors-avg-order-by-aggregate.input';
import { authorsMaxOrderByAggregateInput } from './authors-max-order-by-aggregate.input';
import { authorsMinOrderByAggregateInput } from './authors-min-order-by-aggregate.input';
import { authorsSumOrderByAggregateInput } from './authors-sum-order-by-aggregate.input';

@InputType()
export class authorsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  name?: SortOrderInput;

  @Field(() => authorsCountOrderByAggregateInput, { nullable: true })
  _count?: authorsCountOrderByAggregateInput;

  @Field(() => authorsAvgOrderByAggregateInput, { nullable: true })
  _avg?: authorsAvgOrderByAggregateInput;

  @Field(() => authorsMaxOrderByAggregateInput, { nullable: true })
  _max?: authorsMaxOrderByAggregateInput;

  @Field(() => authorsMinOrderByAggregateInput, { nullable: true })
  _min?: authorsMinOrderByAggregateInput;

  @Field(() => authorsSumOrderByAggregateInput, { nullable: true })
  _sum?: authorsSumOrderByAggregateInput;
}
