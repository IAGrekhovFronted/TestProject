import { provideApollo } from 'apollo-angular';
import {
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
} from '@apollo/client/core';
import { environment } from './environments/environments.dev';

export function createApollo(): ApolloClientOptions<any> {
  return {
    link: new HttpLink({ uri: environment.url }),
    cache: new InMemoryCache(),
  };
}

export const apolloProviders = [provideApollo(createApollo)];
