import { Request, Response, Router } from "express";

import BookController from "../../modules/book/controllers/BookController";

const route = Router();

const bookController = new BookController();

route.post("/register", bookController.create);
route.get("/list", bookController.index);
route.put("/update/:bookId", bookController.update);
route.delete("/delete/:bookId", bookController.delete);

export default route;
