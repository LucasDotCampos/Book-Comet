import { EntityRepository, Repository } from "typeorm";

import BookEntity from "../entities/BookEntity";

@EntityRepository(BookEntity)
class BookRepository extends Repository<BookEntity> {
  public async findByName(name: string): Promise<BookEntity> {
    const book = await this.findOne({
      where: {
        name,
      },
    });

    return book;
  }

  public async findByAuthor(author: string): Promise<BookEntity[]> {
    const book = await this.find({
      where: {
        author,
      },
    });
    return book;
  }

  public async findById(bookId: string): Promise<BookEntity> {
    const book = await this.findOne({
      where: {
        id: bookId,
      },
    });
    return book;
  }
}

export default BookRepository;
