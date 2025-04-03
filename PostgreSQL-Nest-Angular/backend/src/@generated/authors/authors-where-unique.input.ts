import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { authorsWhereInput } from './authors-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class authorsWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => [authorsWhereInput], { nullable: true })
  AND?: Array<authorsWhereInput>;

  @Field(() => [authorsWhereInput], { nullable: true })
  OR?: Array<authorsWhereInput>;

  @Field(() => [authorsWhereInput], { nullable: true })
  NOT?: Array<authorsWhereInput>;

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter;
}
