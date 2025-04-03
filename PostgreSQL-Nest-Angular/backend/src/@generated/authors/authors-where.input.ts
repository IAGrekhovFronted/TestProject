import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class authorsWhereInput {
  @Field(() => [authorsWhereInput], { nullable: true })
  AND?: Array<authorsWhereInput>;

  @Field(() => [authorsWhereInput], { nullable: true })
  OR?: Array<authorsWhereInput>;

  @Field(() => [authorsWhereInput], { nullable: true })
  NOT?: Array<authorsWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter;
}
