import { Request, Response } from "express";

import BookInventoryService from "../services/BookInventoryService";

export default class BookInventorycontroller {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { name, author, quantity } = request.body;

            const bookInventoryService = new BookInventoryService();

            const book = await bookInventoryService.register({
                name,
                author,
                quantity,
            });
            return response.status(200).json(book);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }
    public async delete(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { bookId } = request.params;

            const bookInventoryService = new BookInventoryService();

            const book = await bookInventoryService.delete({
                bookId,
            });
            return response.status(200).json(book);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }
}
