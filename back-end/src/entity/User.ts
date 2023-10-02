import { randomUUID } from "crypto";

export default class User {
  private static userCount = 0;
  userID: string;
  name?: string;
  email: string;
  password: string;
  isAdmin: boolean;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.userID = randomUUID();
    this.isAdmin = User.userCount === 0 ? true : false;
  }
  
}
