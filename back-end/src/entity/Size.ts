import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { randomUUID } from "crypto";
import Quantity from "./Quantity";
import Variant from "./Variant";

@Entity('size')
export default class Size {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  size: string;

  @OneToOne(() => Quantity)
  @JoinColumn()
  quantity: Quantity;
  
  @ManyToOne(() => Variant, variant => variant.sizes)
  variant!: Variant;

  constructor(size: string, quantity: Quantity, variant: Variant) {
    this.size = size;
    this.quantity = quantity;
    this.variant = variant;
    this.id = randomUUID();
  }
}
