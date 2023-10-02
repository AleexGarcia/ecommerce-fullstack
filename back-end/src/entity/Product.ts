
import {randomUUID} from 'crypto';

export default class Product {
    productID: string
    category: string
    name: string
    description: string
    price: number
    size: String
    variant: String

    constructor(category: string, name: string, price: number, size: string, variant: string, description: string){
        this.category = category;
        this.name = name;
        this.price = price;
        this.size = size;
        this.variant = variant;
        this.description = description;
        this.productID = randomUUID();
    }

}