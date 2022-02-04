import { EntityRepository, Repository } from "typeorm";

import EbookEntity from "../entities/EbookEntity";

@EntityRepository(EbookEntity)
class EbookRepository extends Repository<EbookEntity> {
    public async findByName(name: string): Promise<EbookEntity> {
        const book = await this.findOne({
            where: {
                name,
            },
        });
        return book;
    }

    public async findByAuthor(author: string): Promise<EbookEntity[]> {
        const book = await this.find({
            where: {
                author,
            },
        });
        return book;
    }

    public async findByPublisher(publisher: string): Promise<EbookEntity[]> {
        const book = await this.find({
            where: {
                publisher,
            },
        });
        return book;
    }

    public async findById(ebookId: string): Promise<EbookEntity> {
        const book = this.findOne({
            where: {
                id: ebookId,
            },
        });
        return book;
    }
}

export default EbookRepository;
