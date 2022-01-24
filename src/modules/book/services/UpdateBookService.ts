import { getCustomRepository } from "typeorm";

import BookEntity from "../typeorm/entities/BookEntity";
import BookRepository from "../typeorm/repositories/BookRepository";

interface IBook {
  bookId: string;
  name: string;
  author: string;
  publisher: string;
  yearOfPublication: Date;
  summary: string;
}

class UpdateBookService {
  public async execute({
    bookId,
    name,
    author,
    publisher,
    yearOfPublication,
    summary,
  }: IBook): Promise<BookEntity> {
    const bookRepository = getCustomRepository(BookRepository);
    const book = await bookRepository.findById(bookId);

    const bookAlreadyExists = await bookRepository.findByName(name);

    if (bookAlreadyExists) {
      throw new Error("Book already exists");
    }

    book.name = name;
    book.author = author;
    book.publisher = publisher;
    book.yearOfPublication = yearOfPublication;
    book.summary = summary;

    await bookRepository.save(book);
    return book;
  }
}

export default UpdateBookService;
