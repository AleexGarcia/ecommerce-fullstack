import { randomUUID } from "crypto";
import VariantProduct from "./VariantProduct";
import { Column, Entity, OneToMany } from "typeorm";
import { Category } from "../enum/EnumCategory";

@Entity()
export default class Product {
  productID: string;

  @Column({ type: 'enum', enum: Category })
  category: Category;

  name: string;

  description: string;
  
  @OneToMany(() => VariantProduct, (variants) => variants.product)
  variants: VariantProduct[];

  constructor(category: Category, name: string, description: string){
      this.category = category;
      this.name = name;
      this.description = description;
      this.productID = randomUUID();
  }

}
