import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  private apollo = inject(Apollo);

  Query(query: string) {
    return this.apollo.query<{ users: { id: string; name: string }[] }>({
      query: gql`
        ${query}
      `,
    });
  }
}
