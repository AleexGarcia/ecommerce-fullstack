import { EntityManager } from "typeorm";
import { AppDataSource } from "../data-source";
import Product from "../entity/Product";

export default class ProductRepository {
    manager: EntityManager;
    
    constructor(manager: EntityManager = AppDataSource.manager){
        this.manager = manager;
    }

    createProduct = async(product: Product): Promise<Product> => {
       return this.manager.create(Product, product);
    }

    getInitialProducts = async (): Promise<Array<Product>> => {
        return this.manager.getRepository(Product)
        .createQueryBuilder('products')
        .limit(6)
        .getMany()
    }

    getProductsByCategory = async (category: string) : Promise<Array<Product>> => {
        return this.manager.getRepository(Product)
        .createQueryBuilder('products')
        .where('products.category= :category',{category: category})
        .getMany()
    }

    getProductById = async (id: string): Promise<Product | null> => {
        return this.manager.findOne(Product,{
            where:{
                productID: id
            }
        })
    }
    updateProduct = async (id: string, product: object) => {
        return this.manager
        .createQueryBuilder()
        .update(Product)
        .set(product)
        .where("id = :id",{id: id})
        .execute()
    }
   
}