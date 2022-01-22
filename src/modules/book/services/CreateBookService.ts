import { getCustomRepository } from "typeorm";

import BookEntity from "../typeorm/entities/BookEntity";
import BookRepository from "../typeorm/repositories/BookRepository";

interface IBook {
  name: string;
  author: string;
  publisher: string;
  yearOfPublication: Date;
  summary: string;
}

class CreateBookService {
  public async execute({
    name,
    author,
    publisher,
    yearOfPublication,
    summary,
  }: IBook): Promise<BookEntity> {
    const bookRepository = getCustomRepository(BookRepository);
    const bookAlreadyExists = await bookRepository.findByName(name);

    if (bookAlreadyExists) {
      throw new Error("This book is already registered");
    }

    const book = bookRepository.create({
      name,
      author,
      publisher,
      yearOfPublication,
      summary,
    });

    await bookRepository.save(book);
    return book;
  }
}

export default CreateBookService;
