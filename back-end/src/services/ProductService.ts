import Product from "../entity/Product";
import Quantity from "../entity/Quantity";
import Size from "../entity/Size";
import Variant from "../entity/Variant";
import { Category } from "../enum/EnumCategory";
import ProductRepository from "../repositories/ProductRepository";

export default class ProductService {
  productRepository: ProductRepository;
  constructor(productRepository: ProductRepository = new ProductRepository()) {
    this.productRepository = productRepository;
  }

  createProduct = async (name: string , category: Category, description: string, price: number, variants: Variant[]) => {
  
    const product = new Product(category, name, description, price);
    const arrVarients: Variant[] = [];
    for (const iterator of variants) {
      const { url, alt, color, sizes } = iterator;
      const variant = new Variant(color, url, alt, product);
      const arrSizes: Size[] = [];
      for (const i of sizes) {
        const { quantity, size } = i;
        arrSizes.push(new Size(size, new Quantity(quantity.value)));
      }
      variant.sizes = arrSizes;
      arrVarients.push(variant);
    }
    product.variants = arrVarients;
    return this.productRepository.createProduct(product);
  };
  // {
  //   name:'',
  //   category:'',
  //   description:'',
  //   price:'',
  //   variants: [
  //     {
  //       color:""
  //       url:""
  //       alt:""
  //       sizes:[
  //         quatity:{
  //           quantity:""
  //         }
  //         size:""
  //       ]
  //     }
  //   ]
  // }
  getInitialProducts = async () => {
    return this.productRepository.getInitialProducts();
  };

  getProductsByCategory = async (category: Category) => {
    return this.productRepository.getProductsByCategory(category);
  };
  getProductById = async (id: string) => {
    return this.productRepository.getProductById(id);
  };

  updateProduct = async (id: string, receiveProduct: object) => {
    return this.productRepository.updateProduct(id, receiveProduct);
  };

  // addVariantProduct = async (
  //   color: string,
  //   url: string,
  //   alt: string,
  //   product: Product
  // ) => {
  //   const variant = new VariantProduct(color, url, alt, product);
  //   return this.productRepository.addVariantProduct(variant);
  // };

  // addVariantQuantityAndSize = async (
  //   size: string,
  //   quantity: number,
  //   variant: VariantProduct
  // ) => {
  //   const quantityAndSize = new SizeQuantity(size, quantity, variant);
  //   this.productRepository.addVariantQuantityAndSize(quantityAndSize);
  // };
}
