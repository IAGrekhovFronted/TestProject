import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GetAuthor } from '../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private apollo = inject(Apollo);

  getAuthor() {
    return this.apollo.watchQuery<any>({
      query: GetAuthor,
    }).valueChanges;
  }
}
