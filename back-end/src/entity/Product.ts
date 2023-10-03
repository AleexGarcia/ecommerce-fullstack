import { randomUUID } from "crypto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../enum/EnumCategory";
import Variant from "./Variant";

@Entity('product')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  productID: string;

  @Column({ type: "enum", enum: Category })
  category: Category;
  
  @Column()
  name: string;
  
  @Column()
  description: string;

  @Column()
  price: number

  @OneToMany(() => Variant, (variants) => variants.product,{cascade: true})
  variants!: Variant[];

  constructor(category: Category, name: string, description: string, price: number) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.price = price;
    this.productID = randomUUID();
  }
}
