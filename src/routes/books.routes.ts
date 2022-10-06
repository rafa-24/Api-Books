import { Router } from "express";
import { createBook, findAllBooks, deleteBook, editBook } from "../controllers/book.controllers";
import { test, errorHandler } from "../middlewares/pre/jwt";

export const routerBooks = Router();

routerBooks.post('/api/v1/books/create', test, createBook, errorHandler)

routerBooks.get('/api/v1/books/list', test, findAllBooks, errorHandler)

routerBooks.delete('/api/v1/books/:id/delete', deleteBook)

routerBooks.put('/api/v1/books/:id/update', editBook)



