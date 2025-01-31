import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent implements OnInit {
  books: any[] = [];
  newBook = {
    title: '',
    isbn: '',
    pageCount: 0,
    publishedDate: '',
    thumbnailUrl: '',
    shortDescription: '',
    longDescription: '',
    status: 'PUBLISH',
    authors: [],
    categories: []
  };

  constructor(private graphqlService: GraphqlService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.graphqlService.getBooks().subscribe((result: any) => {
      this.books = result.data.books;
    });
  }

  addBook(): void {
    this.graphqlService.addBook(this.newBook).subscribe(() => {
      this.loadBooks(); // Refresh list after adding
      this.newBook = { // Reset form
        title: '',
        isbn: '',
        pageCount: 0,
        publishedDate: '',
        thumbnailUrl: '',
        shortDescription: '',
        longDescription: '',
        status: 'PUBLISH',
        authors: [],
        categories: []
      };
    });
  }
}
