import { getCustomRepository, getRepository } from "typeorm";

import BookInventoryEntity from "../typeorm/entities/BookInventoryEntity";
import InventoryRepository from "../typeorm/repositories/InventoryRepository";

interface IInventory {
    name: string;
    quantity: number;
    author: string;
}

interface IInventoryDelete {
    bookId: string;
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

    public async delete({ bookId }: IInventoryDelete): Promise<void> {
        const bookRepository = getCustomRepository(InventoryRepository);
        const bookInventory = await bookRepository.findById(bookId);

        if (!bookInventory) {
            throw new Error("Book not found");
        } else if (bookInventory.quantity >= 0) {
            throw new Error(
                "You can't remove this book because still there is some of it in the inventory"
            );
        }

        await bookRepository.remove(bookInventory);
    }
}

export default BookInventoryService;
