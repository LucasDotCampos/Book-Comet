import EbookEntity from "../typeorm/entities/EbookEntity";
import EbookRepository from "../typeorm/repositories/EbookRepository";
import { getCustomRepository, getRepository } from "typeorm";

interface IAuthor {
    author: string;
}
interface IPublisher {
    publisher: string;
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

    public async listByPublisherService({
        publisher,
    }: IPublisher): Promise<EbookEntity[]> {
        const listEbookRepository = getCustomRepository(EbookRepository);

        const ebooks = await listEbookRepository.findByPublisher(publisher);

        return ebooks;
    }
}

export default EbookListService;
