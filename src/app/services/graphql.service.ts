import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  // Fetch all books
  getBooks(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query {
          books {
            id
            title
            authors
            categories
            isbn
            status
          }
        }
      `,
    }).valueChanges;
  }

  // Add a new book
  addBook(book: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation AddBook(
          $title: String!,
          $isbn: String!,
          $pageCount: Int,
          $publishedDate: String,
          $thumbnailUrl: String,
          $shortDescription: String,
          $longDescription: String,
          $status: String,
          $authors: [String],
          $categories: [String]
        ) {
          addBook(
            title: $title,
            isbn: $isbn,
            pageCount: $pageCount,
            publishedDate: $publishedDate,
            thumbnailUrl: $thumbnailUrl,
            shortDescription: $shortDescription,
            longDescription: $longDescription,
            status: $status,
            authors: $authors,
            categories: $categories
          ) {
            id
            title
          }
        }
      `,
      variables: book,
    });
  }
}
