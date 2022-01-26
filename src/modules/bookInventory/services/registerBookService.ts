// import { getCustomRepository } from "typeorm";

// import BookInventoryRepository from "../typeorm/repositories/BookInventoryRepository";

// interface IInventory {
//     book: string;
//     quantity: string;
// }

// class RegisterBookService {
//     public async execute({ book, quantity }: IInventory): Promise<void> {
//         const bookRepository = getCustomRepository(BookInventoryRepository);

//         const bookInventory = bookRepository.create({
//             book,
//             quantity,
//         });

//         await bookRepository.save(bookInventory);
//         return;
//     }
// }

// export default RegisterBookService;
