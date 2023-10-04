import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('quantity')
export default class Quantity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column("integer")
  value: number;

  constructor(
    value: number,
  ) {
    this.value = value;
    this.id = randomUUID();
  }
}
