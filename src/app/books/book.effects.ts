import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects{

    addbook$=createEffect(()=>this.actions$.pipe(ofType(bookActions.AddBook),

    mergeMap((action) => this.bookservice.addBook(action)
    .pipe(
        // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
        map(book => bookActions.AddBooksucess(book)),

        // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
        catchError((error) => of(bookActions.AddBookfail({ error })))
    )
    )
));

    constructor(private actions$: Actions,
        private bookservice: BookService
    ){}
}