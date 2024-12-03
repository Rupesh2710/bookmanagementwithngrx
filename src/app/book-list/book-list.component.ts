import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Book } from '../models/book';
import { AppState } from '../app.state';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$:Observable<Book[]>

  constructor(private store:Store<AppState>){
    this.books$=store.pipe(select('book'));
  }

  addbook(id:string,title:string,author:string){
    this.store.dispatch(AddBook({id,title,author}));
  }

  removebook(bookid:string){
    this.store.dispatch(RemoveBook({bookid}));
  }

}
