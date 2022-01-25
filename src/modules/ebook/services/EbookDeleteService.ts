import { getCustomRepository } from "typeorm";

import BookRepository from "../../book/typeorm/repositories/BookRepository";
import EbookRepository from "../typeorm/repositories/EbookRepository";

interface IEbook {
    ebookId: string;
}

class EbookDeleteService {
    public async execute({ ebookId }: IEbook): Promise<void> {
        const ebookRepository = getCustomRepository(EbookRepository);
        const ebook = await ebookRepository.findById(ebookId);

        if (!ebook) {
            throw new Error("Ebook not found");
        }

        await ebookRepository.remove(ebook);
    }
}

export default EbookDeleteService;
