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

interface IInventoryUpdate {
    name: string;
    quantity: number;
    author: string;
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

    public async update({
        name,
        quantity,
        author,
        bookId,
    }: IInventoryUpdate): Promise<BookInventoryEntity> {
        const bookRepository = getCustomRepository(InventoryRepository);
        const book = await bookRepository.findById(bookId);

        book.name = name;
        book.author = author;

        if (quantity + book.quantity < 0) {
            throw new Error("We don't have this book in inventory anymore");
        }

        book.quantity = book.quantity + quantity;

        await bookRepository.save(book);
        return book;
    }

    public async index(): Promise<BookInventoryEntity[]> {
        const bookInventoryRepository = getRepository(BookInventoryEntity);

        const books = await bookInventoryRepository.find();

        return books;
    }
}

export default BookInventoryService;
