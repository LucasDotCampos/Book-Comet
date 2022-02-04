import EbookCreateService from "../../../services/EbookCreateService";
import EbookDeleteService from "../../../services/EbookDeleteService";
import EbookListService from "../../../services/EbookListService";
import EbookUpdateService from "../../../services/EbookUpdateService";
import { Request, Response } from "express";

export default class EbookController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const {
                name,
                author,
                publisher,
                yearOfPublication,
                summary,
                format,
            } = request.body;
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

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const ebookListService = new EbookListService();

            const ebooks = await ebookListService.execute();

            return response.status(200).json(ebooks);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }

    public async listByAuthor(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { author } = request.params;
            const ebookListService = new EbookListService();

            const ebooks = await ebookListService.listByAuthorService({
                author,
            });

            return response.status(200).json(ebooks);
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
            const ebookListService = new EbookListService();

            const ebooks = await ebookListService.listByPublisherService({
                publisher,
            });

            return response.status(200).json(ebooks);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { ebookId } = request.params;
            const {
                name,
                author,
                publisher,
                yearOfPublication,
                summary,
                format,
            } = request.body;

            const ebookUpdateService = new EbookUpdateService();

            const ebook = await ebookUpdateService.execute({
                ebookId,
                name,
                author,
                publisher,
                yearOfPublication,
                summary,
                format,
            });
            return response.status(200).json(ebook);
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }

    public async delete(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { ebookId } = request.params;

            const ebookDeleteService = new EbookDeleteService();

            const ebook = await ebookDeleteService.execute({
                ebookId,
            });
            return response.status(200).json("Ebook is succesfully removed");
        } catch (err) {
            return response.status(400).json(err.message);
        }
    }
}
