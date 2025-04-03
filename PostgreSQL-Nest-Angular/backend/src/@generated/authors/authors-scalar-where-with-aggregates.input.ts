import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class authorsScalarWhereWithAggregatesInput {
  @Field(() => [authorsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<authorsScalarWhereWithAggregatesInput>;

  @Field(() => [authorsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<authorsScalarWhereWithAggregatesInput>;

  @Field(() => [authorsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<authorsScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: StringNullableWithAggregatesFilter;
}
