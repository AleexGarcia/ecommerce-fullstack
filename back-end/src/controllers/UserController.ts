import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  userService: UserService;

  constructor(userService: UserService = new UserService()) {
    this.userService = userService;
  }

  signup = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const user = await this.userService.createUser(email, password);
    if (user) {
      return response.status(201);
    } else {
      return response.status(400);
    }
  };

  login = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    if (!email || !password)
      return response.status(401).json({ message: "Email/password invalid" });

    try {
      const token = await this.userService.generateAuthToken(email, password);
      return response
        .status(200)
        .json({ message: "authenticated", token: token });
    } catch {
      return response.status(401).json({ message: "Unauthorized" });
    }
  };

  
}
