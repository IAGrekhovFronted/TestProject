import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateAuthorInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Authors;
  removeAuthor: Authors;
  updateAuthor: Authors;
};


export type MutationCreateAuthorArgs = {
  createAuthorInput: CreateAuthorInput;
};


export type MutationRemoveAuthorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAuthorArgs = {
  updateAuthorInput: UpdateAuthorInput;
};

export type Query = {
  __typename?: 'Query';
  author: Authors;
  authors: Array<Authors>;
};


export type QueryAuthorArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateAuthorInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type Authors = {
  __typename?: 'authors';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type GetAuthorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'authors', id: string, name?: string | null }> };


export const GetAuthor = gql`
    query GetAuthor {
  authors {
    id
    name
  }
}
    `;