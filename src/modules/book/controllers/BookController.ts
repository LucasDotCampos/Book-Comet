import { Request, Response } from "express";

import CreateBookService from "../services/CreateBookService";

export default class BookController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, author, publisher, yearOfPublication, summary } =
        request.body;
      const createBookService = new CreateBookService();

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
}
