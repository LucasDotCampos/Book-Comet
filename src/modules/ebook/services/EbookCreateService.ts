import { getCustomRepository } from "typeorm";

import BookRepository from "../../book/typeorm/repositories/BookRepository";
import EbookEntity from "../typeorm/entities/EbookEntity";
import EbookRepository from "../typeorm/repositories/EbookRepository";

interface IEbook {
  name: string;
  author: string;
  publisher: string;
  yearOfPublication: Date;
  summary: string;
  format: string;
}

class CreateEbookService {
  public async execute({
    name,
    author,
    publisher,
    yearOfPublication,
    summary,
    format,
  }: IEbook): Promise<EbookEntity | void> {
    const ebookRepository = getCustomRepository(EbookRepository);
    const ebookAlreadyExists = await ebookRepository.findByName(name);

    if (ebookAlreadyExists && ebookAlreadyExists.author === author) {
      throw new Error("This ebook is already registered");
    }

    const ebook = ebookRepository.create({
      name,
      author,
      publisher,
      format,
      summary,
      yearOfPublication,
    });

    await ebookRepository.save(ebook);
    return ebook;
  }
}

export default CreateEbookService;