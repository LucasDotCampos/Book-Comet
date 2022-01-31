import { Request, Response } from "express";

import BookCreateService from "../services/BookCreateService";
import BookDeleteService from "../services/BookDeleteService";
import BookListService from "../services/BookListService";
import BookUpdateService from "../services/BookUpdateService";

export default class BookController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { name, author, publisher, yearOfPublication, summary } =
                request.body;
            const bookCreateService = new BookCreateService();

            const book = await bookCreateService.execute({
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

    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        const bookListService = new BookListService();

        const book = await bookListService.execute();
        return response.json(book);
    }
    public async listByAuthor(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { author } = request.params;
            const bookListService = new BookListService();

            const books = await bookListService.listByAuthor({
                author,
            });

            return response.status(200).json(books);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }

    public async listByPublisher(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { publisher } = request.params;
            const bookListService = new BookListService();

            const books = await bookListService.listByPublisher({
                publisher,
            });

            return response.status(200).json(books);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const { bookId } = request.params;

            const bookDeleteService = new BookDeleteService();

            await bookDeleteService.execute({ bookId });

            return response.status(200).json("Book was successfully removed");
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const { bookId } = request.params;

            const { name, author, publisher, yearOfPublication, summary } =
                request.body;

            const bookUpdateService = new BookUpdateService();

            const book = await bookUpdateService.execute({
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
