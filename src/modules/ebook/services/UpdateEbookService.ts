import { getCustomRepository } from "typeorm";

import EbookEntity from "../typeorm/entities/EbookEntity";
import EbookRepository from "../typeorm/repositories/EbookRepository";

interface IEbook {
    ebookId: string;
    name: string;
    author: string;
    publisher: string;
    yearOfPublication: Date;
    summary: string;
    format: string;
}

class UpdateEbookService {
    public async execute({
        ebookId,
        name,
        author,
        publisher,
        yearOfPublication,
        summary,
        format,
    }: IEbook): Promise<EbookEntity> {
        const ebookRepository = getCustomRepository(EbookRepository);

        const ebook = await ebookRepository.findById(ebookId);

        const bookAlreadyExists = await ebookRepository.findByName(name);

        if (bookAlreadyExists) {
            throw new Error("This ebook is already registered");
        }

        ebook.name = name;
        ebook.author = author;
        ebook.publisher = publisher;
        ebook.yearOfPublication = yearOfPublication;
        ebook.summary = summary;
        ebook.format = format;

        await ebookRepository.save(ebook);
        return ebook;
    }
}

export default UpdateEbookService;
