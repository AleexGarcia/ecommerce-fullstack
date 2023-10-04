import Product from "../entity/Product";
import Quantity from "../entity/Quantity";
import Size from "../entity/Size";
import Variant from "../entity/Variant";
import { Category } from "../enum/EnumCategory";
import { IDataProduct } from "../interfaces/interfaces";
import ProductRepository from "../repositories/ProductRepository";

export default class ProductService {
  productRepository: ProductRepository;
  constructor(productRepository: ProductRepository = new ProductRepository()) {
    this.productRepository = productRepository;
  }

  createProduct = async (objectData: IDataProduct) => {
    const { category, name, description, price, variants } = objectData;
    const product = new Product(category, name, description, price);
    const RP = this.productRepository.createProduct(product);
    for (const iterator of variants) {
      const { url, alt, color, sizes } = iterator;
      const variant = new Variant(color, url, alt, product);
      await this.productRepository.addVariantProduct(variant);
      for (const i of sizes) {
        const { quantity, size } = i;
        const objectQuantity = new Quantity(quantity);
        await this.productRepository.addVariantQuantity(objectQuantity);
        const objectSize = new Size(size, objectQuantity, variant);
        await this.productRepository.addVariantSize(objectSize);
      }
    }
    return RP;
  };

  getInitialProducts = async () => {
    return this.productRepository.getInitialProducts();
  };

  getProductsByCategory = async (category: Category) => {
    return this.productRepository.getProductsByCategory(category);
  };

  getProductById = async (id: string) => {
    return this.productRepository.getProductById(id);
  };

  updateProduct = async (id: string, receiveProduct: Product) => {
    const existingProduct = this.productRepository.getProductById(id);
    if (!existingProduct) return null;
    return this.productRepository.updateProduct(receiveProduct);
  };
}
