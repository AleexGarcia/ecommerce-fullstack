import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import VariantProduct from "./VariantProduct";
import { randomUUID } from "crypto";

@Entity()
export default class SizeQuantity {
  @PrimaryGeneratedColumn("uuid")
  sizeQuantityID: string;
  @Column()
  size: string;
  @Column()
  quantity: number;
  @ManyToOne(() => VariantProduct, (variant) => variant.sizesAndQuantities)
  variant: VariantProduct;
  constructor(size: string, quantity: number, variant: VariantProduct) {
    this.size = size;
    this.quantity = quantity;
    this.variant = variant;
    this.sizeQuantityID = randomUUID();
  }
}
