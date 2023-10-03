import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('quantity')
export default class Quantity {
  @PrimaryGeneratedColumn('uuid')
  quantityID: string;
  
  @Column()
  value: number;

  constructor(
    value: number,
  ) {
    this.value = value;
    this.quantityID = randomUUID();
  }
}
