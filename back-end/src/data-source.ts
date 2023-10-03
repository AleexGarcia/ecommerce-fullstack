import "reflect-metadata"
import { DataSource } from "typeorm"
import Size from "./entity/Size"
import Quantity from "./entity/Quantity"
import Product from "./entity/Product"
import Variant from "./entity/Variant"
import User from "./entity/User"
import { Createtables1696343582698 } from "./migration/1696343582698-createtables"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "db_ecommerce",
    synchronize: true,
    logging: false,
    entities: [Size, Product,Variant, User,Quantity],
    migrations: [Createtables1696343582698],
    subscribers: [],
})

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch(err => {
    console.error("Error during Data Source initialization", err);
})