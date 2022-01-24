import { Request, Response } from "express";

import EbookCreateService from "../services/EbookCreateService";

export default class EbookController {
  public async create(
    request: Request,
    response: Response
  ): Promise<Response | void> {
    try {
      const { name, author, publisher, yearOfPublication, summary, format } =
        request.body;
      const ebookCreateService = new EbookCreateService();
      const book = await ebookCreateService.execute({
        name,
        author,
        publisher,
        yearOfPublication,
        summary,
        format,
      });
      return response.status(200).json(book);
    } catch (err) {
      return response.status(400).json();
    }
  }
}
