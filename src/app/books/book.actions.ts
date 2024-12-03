import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook=createAction('[Book] Add Book', props<Book>());
export  const AddBooksucess=createAction('[Book] Added sucessfully',props<Book>());
export const AddBookfail=createAction('[Book] not added',props<{error:any}>());



export const RemoveBook=createAction('[Book] Remove Book', props<{bookid:string}>());
export  const RemoveBooksucess=createAction('[Book] Removed sucessfully',props<{bookid:string}>());
export const RemoveBookfail=createAction('[Book] not removed',props<{error:any}>());
