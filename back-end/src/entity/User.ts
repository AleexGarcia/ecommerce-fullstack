import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')
export default class User {
  private static userCount = 0;
  @PrimaryGeneratedColumn('uuid')
  userID: string;
  @Column()
  name?: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  isAdmin: boolean;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.userID = randomUUID();
    this.isAdmin = User.userCount === 0 ? true : false;
  }
  
}
