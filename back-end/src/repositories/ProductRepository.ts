import { DeleteResult, EntityManager } from "typeorm";
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

  getProductsByCategory = async (
    category: Category
  ): Promise<Array<Product>> => {
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

  getProductsByPartialName = async (
    partialName: string
  ): Promise<Product[]> => {
    return this.manager
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.name ILIKE = :partialName", {
        partialName: `%${partialName}%`,
      })
      .getMany();
  };

  updateProduct = async (product: Product): Promise<Product> => {
    await this.manager.save(product);
    for (const variant of product.variants) {
      await this.manager.save(variant);
      for (const size of variant.sizes) {
        await this.manager.save(size);
        await this.manager.save(size.quantity);
      }
    }
    return product;
  };

  deleteProduct = async (product: Product):Promise<DeleteResult> => {
    
    for (const variant of product.variants) {
      for (const size of variant.sizes) {
        await this.manager.delete(Size,{id: size.id})
        await this.manager.delete(Quantity,{id: size.quantity.id});
      }
      await this.manager.delete(Variant,{id: variant.id});
    }
    return await this.manager.delete(Product,{id: product.id});
    
  };

  addVariantProduct = async (variant: Variant): Promise<Variant> => {
    return this.manager.save(variant);
  };

  addVariantQuantity = async (quantity: Quantity): Promise<Quantity> => {
    return this.manager.save(quantity);
  };
  addVariantSize = async (size: Size): Promise<Size> => {
    return this.manager.save(size);
  };


}
