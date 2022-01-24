import { getCustomRepository } from "typeorm";

import BookRepository from "../typeorm/repositories/BookRepository";

interface IBook {
  bookId: string;
}

class DeleteBookService {
  public async execute({ bookId }: IBook): Promise<void> {
    const bookRepository = getCustomRepository(BookRepository);

    const book = await bookRepository.findById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }
    await bookRepository.remove(book);
  }
}

export default DeleteBookService;
