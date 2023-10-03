import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { randomUUID } from "crypto";
import Quantity from "./Quantity";
import Variant from "./Variant";

@Entity()
export default class Size {
  @PrimaryGeneratedColumn("uuid")
  sizeID: string;

  @Column()
  size: string;

  @OneToOne(() => Quantity)
  @JoinColumn()
  quantity: Quantity;

  @ManyToOne(() => Variant, variant => variant.sizes,{cascade: true})
  variant: Variant;

  constructor(size: string, quantity: Quantity) {
    this.size = size;
    this.quantity = quantity;
    this.sizeID = randomUUID();
  }
}
