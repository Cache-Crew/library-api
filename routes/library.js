// Import Router
import { Router } from "express";
import { addBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/products.js";

// Create a library router
const libraryRouter = Router();

// Define routes
libraryRouter.post('/library', addBook);

libraryRouter.get('/library', getBooks);

libraryRouter.get('/library/:id', getBook);

libraryRouter.patch('/library/:id', updateBook);

libraryRouter.delete('/library/:id', deleteBook);

// Export Router
export default libraryRouter;