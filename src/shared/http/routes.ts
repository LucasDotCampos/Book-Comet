import { Request, Response, Router } from "express";

import BookController from "../../modules/book/controllers/BookController";
import BookInventorycontroller from "../../modules/bookInventory/controllers/BookInventoryController";
import EbookController from "../../modules/ebook/controllers/EbookController";

const route = Router();

const bookController = new BookController();
const ebookController = new EbookController();
const inventorycontroller = new BookInventorycontroller();

//Book's routes
route.post("/book/register", bookController.create);
route.get("/book/list", bookController.index);
route.get("/book/list/author/:author", bookController.listByAuthor);
route.get("/book/list/publisher/:publisher", bookController.listByPublisher);
route.put("/book/update/:bookId", bookController.update);
route.delete("/book/delete/:bookId", bookController.delete);

//Ebook's routes
route.post("/ebook/register", ebookController.create);
route.get("/ebook/list", ebookController.list);
route.get("/ebook/list/author/:author", ebookController.listByAuthor);
route.get("/ebook/list/publisher/:publisher", ebookController.listByPublisher);
route.put("/ebook/update/:ebookId", ebookController.update);
route.delete("/ebook/delete/:ebookId", ebookController.delete);

//Inventory's routes
route.post("/inventory/register", inventorycontroller.create);
route.delete("/inventory/delete/:bookId", inventorycontroller.delete);
route.put("/inventory/update/:bookId", inventorycontroller.update);

export default route;
