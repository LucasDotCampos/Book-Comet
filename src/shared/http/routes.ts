import { Request, Response, Router } from "express";

import BookController from "../../modules/book/controllers/BookController";
import EbookController from "../../modules/ebook/controllers/EbookController";

const route = Router();

const bookController = new BookController();
const ebookController = new EbookController();

//Book's routes
route.post("/book/register", bookController.create);
route.get("/book/list", bookController.index);
route.put("/book/update/:bookId", bookController.update);
route.delete("/book/delete/:bookId", bookController.delete);

//Ebook's routes
route.post("/ebook/register", ebookController.create);
route.get("/ebook/list", ebookController.list);
route.get("/ebook/list/:author", ebookController.listByAuthor);
route.put("/ebook/update/:ebookId", ebookController.update);
route.delete("/ebook/delete/:ebookId", ebookController.delete);

export default route;
