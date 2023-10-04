import { EntityManager, createQueryBuilder } from "typeorm";
import { AppDataSource } from "../data-source";
import Product from "../entity/Product";
import Quantity from "../entity/Quantity";
import Size from "../entity/Size";
import Variant from "../entity/Variant";
import { Category } from "../enum/EnumCategory";

export default class ProductRepository {
  manager: EntityManager;

  constructor(manager: EntityManager = AppDataSource.manager) {
    this.manager = manager;
  }

  createProduct = async (product: Product): Promise<Product> => {
    return this.manager.save(product);
  };

  getInitialProducts = async (): Promise<Array<Product>> => {
    return this.manager
      .getRepository(Product)
      .createQueryBuilder("product")
      .limit(6)
      .getMany();
  };

  getProductsByCategory = async (category: Category): Promise<Array<Product>> => {
    return this.manager
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.category= :category", { category: category })
      .leftJoinAndSelect("product.variants", "variants")
      .leftJoinAndSelect("variants.sizes", "sizes")
      .leftJoinAndSelect("sizes.quantity", "quantity")
      .getMany();
  };

  getProductById = async (id: string): Promise<Product | null> => {
  
    return this.manager
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.id = :id", { id: id })
      .leftJoinAndSelect("product.variants", "variants")
      .leftJoinAndSelect("variants.sizes", "sizes")
      .leftJoinAndSelect("sizes.quantity", "quantity")
      .getOne();
  };

  updateProduct = async (product: Product) => {
       await this.manager.save(product);
       for (const variant of product.variants) {
            await this.manager.save(variant);
            for (const size of variant.sizes) {
                await this.manager.save(size);
                await this.manager.save(size.quantity);
            }
       }
  };

  addVariantProduct = async (variant: Variant) => {
    return this.manager.save(variant);
  };

  addVariantQuantity = async (quantity: Quantity) => {
    return this.manager.save(quantity);
  };
  addVariantSize = async (size: Size) => {
    return this.manager.save(size);
  };
}
