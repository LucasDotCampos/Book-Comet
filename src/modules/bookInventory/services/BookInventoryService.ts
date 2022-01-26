import { getCustomRepository, getRepository } from "typeorm";

import BookInventoryEntity from "../typeorm/entities/BookInventoryEntity";
import InventoryRepository from "../typeorm/repositories/InventoryRepository";

interface IInventory {
    name: string;
    quantity: number;
    author: string;
}

class BookInventoryService {
    public async register({
        name,
        quantity,
        author,
    }: IInventory): Promise<BookInventoryEntity> {
        const bookRepository = getCustomRepository(InventoryRepository);
        const bookAlreadyExists = await bookRepository.findByName(name);

        if (bookAlreadyExists && bookAlreadyExists.author === author) {
            throw new Error("This book is already registered");
        }

        const inventoryRepository = getRepository(BookInventoryEntity);
        const book = inventoryRepository.create({
            name,
            author,
            quantity,
        });

        await bookRepository.save(book);
        return book;
    }
}

export default BookInventoryService;
