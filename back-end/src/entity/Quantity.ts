import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export default class Quantity {
  @PrimaryGeneratedColumn('uuid')
  quantityID: string;
  
  @Column()
  quantity: number;

  constructor(
    quantity: number,
  ) {
    this.quantity = quantity;
    this.quantityID = randomUUID();
  }
}
