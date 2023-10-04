import { Category } from "../enum/EnumCategory";

export interface IDataProduct {
  name: string;
  category: Category;
  description: string;
  price: number;
  variants: Array<IVariant>;
}

interface IVariant {
  color: string;
  url: string;
  alt: string;
  sizes: Array<ISizeAndQuantity>;
}
interface ISizeAndQuantity {
  size: string;
  quantity: number;
}
