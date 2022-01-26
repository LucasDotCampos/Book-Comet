import { EntityRepository, Repository } from "typeorm";

import BookEntity from "../../../book/typeorm/entities/BookEntity";

@EntityRepository(BookEntity)
class BookInventoryRepository extends Repository<BookEntity> {
    public async findById(bookId: string): Promise<BookEntity> {
        const book = this.findOne({
            where: {
                id: bookId,
            },
        });
        return book;
    }
}

export default BookInventoryRepository;
