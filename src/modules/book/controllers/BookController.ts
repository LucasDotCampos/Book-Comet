import { Request, Response } from "express";

import BookListService from "../services/BookListService";
import BookService from "../services/CreateBookService";
import DeleteBookService from "../services/DeleteBookService";
import UpdateBookService from "../services/UpdateBookService";

export default class BookController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, author, publisher, yearOfPublication, summary } =
        request.body;
      const createBookService = new BookService();

      const book = await createBookService.execute({
        name,
        author,
        publisher,
        yearOfPublication,
        summary,
      });
      return response.status(200).json(book);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const bookListService = new BookListService();

    const book = await bookListService.execute();
    return response.json(book);
  }

  public async delete(request: Request, response: Response) {
    try {
      const { bookId } = request.params;

      const deleteBookService = new DeleteBookService();

      await deleteBookService.execute({ bookId });

      return response.status(204).json("Book was successfully removed");
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const { bookId } = request.params;

      const { name, author, publisher, yearOfPublication, summary } =
        request.body;

      const updateBookService = new UpdateBookService();

      const book = await updateBookService.execute({
        bookId,
        name,
        author,
        publisher,
        yearOfPublication,
        summary,
      });

      return response.status(200).json(book);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}
