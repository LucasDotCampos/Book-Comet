import { EntityRepository, Repository } from "typeorm";

import BookInventoryEntity from "../entities/BookInventoryEntity";

@EntityRepository(BookInventoryEntity)
class InventoryRepository extends Repository<BookInventoryEntity> {
    public async findByName(name: string): Promise<BookInventoryEntity> {
        const book = await this.findOne({
            where: {
                name,
            },
        });

        return book;
    }

    public async findByAuthor(author: string): Promise<BookInventoryEntity[]> {
        const book = await this.find({
            where: {
                author,
            },
        });
        return book;
    }
}

export default InventoryRepository;
