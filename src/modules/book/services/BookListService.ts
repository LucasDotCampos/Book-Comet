import BookEntity from "../typeorm/entities/BookEntity";
import { getRepository } from "typeorm";

class BookListService {
    public async execute(): Promise<BookEntity[]> {
        const listBookRepository = getRepository(BookEntity);

        const books = await listBookRepository.find();

        return books;
    }
}

export default BookListService;
