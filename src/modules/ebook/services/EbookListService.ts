import { getCustomRepository, getRepository } from "typeorm";

import EbookEntity from "../typeorm/entities/EbookEntity";
import EbookRepository from "../typeorm/repositories/EbookRepository";

interface IAuthor {
    author: string;
}

class EbookListService {
    public async execute(): Promise<EbookEntity[]> {
        const listEbookRepository = getRepository(EbookEntity);

        const ebooks = await listEbookRepository.find();

        return ebooks;
    }

    public async listByAuthorService({
        author,
    }: IAuthor): Promise<EbookEntity[]> {
        const listEbookRepository = getCustomRepository(EbookRepository);

        const ebooks = await listEbookRepository.findByAuthor(author);

        return ebooks;
    }
}

export default EbookListService;
