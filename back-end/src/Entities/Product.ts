import Store from "./Store";
import {randomUUID} from 'crypto';

export default class Product {
    productID: string
    category: string
    name: string
    description: string
    price: number
    store: Store
    size: String
    variant: String

    constructor(category: string, name: string, price: number, store: Store, size: string, variant: string,description: string){
        this.category = category;
        this.name = name;
        this.price = price;
        this.store = store;
        this.size = size;
        this.variant = variant;
        this.description = description;
        this.productID = randomUUID();
    }

}