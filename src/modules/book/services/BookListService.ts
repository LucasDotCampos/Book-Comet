import BookEntity from "../typeorm/entities/BookEntity";
import BookRepository from "../typeorm/repositories/BookRepository";
import { getCustomRepository, getRepository } from "typeorm";

interface IAuthor {
    author: string;
}

interface IPublisher {
    publisher: string;
}

class BookListService {
    public async execute(): Promise<BookEntity[]> {
        const listBookRepository = getRepository(BookEntity);

        const books = await listBookRepository.find();

        return books;
    }

    public async listByAuthor({ author }: IAuthor): Promise<BookEntity[]> {
        const listBookRepository = getCustomRepository(BookRepository);

        const books = await listBookRepository.findByAuthor(author);

        return books;
    }

    public async listByPublisher({
        publisher,
    }: IPublisher): Promise<BookEntity[]> {
        const listBookRepository = getCustomRepository(BookRepository);

        const books = await listBookRepository.findByPublisher(publisher);

        return books;
    }
}

export default BookListService;
