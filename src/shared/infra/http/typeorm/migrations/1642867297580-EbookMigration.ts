import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EbookMigration1642867297580 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ebook",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "author",
            type: "varchar",
          },
          {
            name: "publisher",
            type: "varchar",
          },
          {
            name: "yearOfPublication",
            type: "timestamp",
          },
          {
            name: "summary",
            type: "varchar",
          },
          {
            name: "format",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ebook");
  }
}
