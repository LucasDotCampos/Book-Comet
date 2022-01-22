import { getRepository } from "typeorm";

import BookEntity from "../typeorm/entities/BookEntity";

class BookListService {
  public async execute(): Promise<BookEntity[]> {
    const listBookRepository = getRepository(BookEntity);

    const books = await listBookRepository.find();

    return books;
  }
}

export default BookListService;
