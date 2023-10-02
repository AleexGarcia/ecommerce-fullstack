import { EntityManager } from "typeorm";
import { AppDataSource } from "../data-source";
import User from "../entity/User";

export default class UserRepository {

    manager: EntityManager;

    constructor(manager: EntityManager = AppDataSource.manager ){
        this.manager = manager;
    }

    createUser = async (user: User): Promise<User> => {
      return this.manager.create(User, user);
    }

    getAuthenticatedUser = async (email: string, password: string): Promise<User | null> => {
        return this.manager.createQueryBuilder(User,'user')
        .where("user.email = :email",{email: email})
        .andWhere("user.password = :password",{password: password})
        .getOne()
    }

}