import Product from "./Product";
import User from "./User";
import {randomUUID} from 'crypto'

export default class Store {
    storeID: string
    name: string
    products?: Array<Product>
    user: User

    constructor(name: string,user: User){
        this.name = name;
        this.user = user;
        this.storeID = randomUUID();
    }

}