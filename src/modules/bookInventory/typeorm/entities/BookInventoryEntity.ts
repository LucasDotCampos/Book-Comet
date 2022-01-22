import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity("bookInventory")
class BookInventoryEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  book: string;

  @Column()
  quantity: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}

export default BookInventoryEntity;
