import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { authorsCreateManyInput } from './authors-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyauthorsArgs {
  @Field(() => [authorsCreateManyInput], { nullable: false })
  @Type(() => authorsCreateManyInput)
  data!: Array<authorsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
