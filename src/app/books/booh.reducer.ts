import { createReducer,on } from "@ngrx/store";
import { AddBook,RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialstate: Book[]=[];
export const BookReducer=createReducer(
    initialstate,
    on(AddBook,(state,{id,title,author})=>[...state,{id,title,author}]),
    on(RemoveBook,(state,{bookid})=>state.filter(book=>book.id!=bookid))
);