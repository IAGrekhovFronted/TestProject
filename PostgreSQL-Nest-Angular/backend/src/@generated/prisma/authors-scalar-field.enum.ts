import { registerEnumType } from '@nestjs/graphql';

export enum AuthorsScalarFieldEnum {
  id = 'id',
  name = 'name',
}

registerEnumType(AuthorsScalarFieldEnum, {
  name: 'AuthorsScalarFieldEnum',
  description: undefined,
});
