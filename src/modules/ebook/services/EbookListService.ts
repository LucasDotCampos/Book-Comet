import { getRepository } from "typeorm";

import EbookEntity from "../typeorm/entities/EbookEntity";

class EbookListService {
    public async execute(): Promise<EbookEntity[]> {
        const listEbookRepository = getRepository(EbookEntity);

        const ebooks = await listEbookRepository.find();

        return ebooks;
    }
}

export default EbookListService;
