import User from "../entity/User";
import UserRepository from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";
export default class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  createUser = async (email: string, password: string) => {
    const user = new User(email, password);
    return this.userRepository.createUser(user);
  };

  generateAuthToken = async (email: string, password: string) => {
    const user = await this.getAuthenticatedUser(email, password);
    if (!user) throw new Error("email/password invalid");

    const token = sign(
      { name: user.name, email: user.email },
      "#x82$cs<QK#^<I2`MsE%;:sGD4?I+6bx:U6BFDX?:sJz&rIw47$@%t|Y|Wv3.fE",
      { subject: user.userID }
    );

    return token;
  };

  private getAuthenticatedUser = (email: string, password: string) => {
    return this.userRepository.getAuthenticatedUser(email, password);
  };
}
