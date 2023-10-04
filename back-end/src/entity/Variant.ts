import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";
import { randomUUID } from "crypto";
import Size from "./Size";

@Entity('variant')
export default class Variant{
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  color: string;
  @Column()
  url: string;
  @Column()
  alt: string;
  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

  @OneToMany(() => Size, size => size.variant)
  sizes!: Size[];

  constructor(
    color: string,
    url: string,
    alt: string,
    product: Product
  ) {
    this.color = color;
    this.url = url;
    this.alt = alt;
    this.product = product;
    this.id = randomUUID();
  }
}
