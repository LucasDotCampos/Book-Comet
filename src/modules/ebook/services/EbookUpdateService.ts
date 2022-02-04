import { getCustomRepository } from "typeorm";

import EbookEntity from "../infra/typeorm/entities/EbookEntity";
import EbookRepository from "../infra/typeorm/repositories/EbookRepository";

interface IEbook {
    ebookId: string;
    name: string;
    author: string;
    publisher: string;
    yearOfPublication: Date;
    summary: string;
    format: string;
}

class EbookUpdateService {
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

export default EbookUpdateService;
