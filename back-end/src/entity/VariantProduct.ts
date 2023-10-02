import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";
import SizeQuantity from "./SizeQuantity";
import { randomUUID } from "crypto";

@Entity()
export default class VariantProduct {
  @PrimaryGeneratedColumn("uuid")
  variantID: string;
  @Column()
  color: string;
  @Column()
  price: number;
  @Column()
  url: string;
  @Column()
  alt: string;
  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;
  @OneToMany(() => SizeQuantity, (sizeAndQuantity) => sizeAndQuantity.variant)
  @JoinTable()
  sizesAndQuantities: SizeQuantity[];

  constructor(
    color: string,
    price: number,
    url: string,
    alt: string,
    product: Product
  ) {
    this.color = color;
    this.price = price;
    this.url = url;
    this.alt = alt;
    this.product = product;
    this.variantID = randomUUID();
  }
}
