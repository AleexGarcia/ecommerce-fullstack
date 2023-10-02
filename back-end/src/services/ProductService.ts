import Product from "../entity/Product";
import ProductRepository from "../repositories/ProductRepository";

export default class ProductService {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository = new ProductRepository()){
        this.productRepository = productRepository;
    }
    createProduct = async (category: string, name: string, price: number, size: string, variant: string, description: string, quantity: number,url: string, alt: string): Promise<Product> => {
        
        const product = new Product(category, name, price, size, variant, description, quantity, url, alt);

        return this.productRepository.createProduct(product);

    }

    getInitialProducts = async () => {
        return this.productRepository.getInitialProducts();
    }

    getProductsByCategory = async (category: string) => {
        return this.productRepository.getProductsByCategory(category);
    }
    getProductById = async (id: string) => {
        return this.productRepository.getProductById(id);
    }

    updateProduct = async (id: string, receiveProduct: object) => {
        return this.productRepository.updateProduct(id, receiveProduct);
    }

  
}