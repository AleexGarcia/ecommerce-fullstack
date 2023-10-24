
import { Category } from "../enum/EnumCategory";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category | undefined;
  variants: Array<IVariant>;
}

export interface IVariant {
  color: string;
  url: string;
  alt: string;
  stock: Array<IStock>;
}

export interface IStock {
  size: string;
  quantity: number;
}
