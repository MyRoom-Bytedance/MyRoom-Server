import { User } from "../entity/user";
import dataSource from "../db";

const userRepository = dataSource.getRepository(User);

export class UserService {
  public static async createUser(username: string, password: string) {
    const user = await userRepository.findOneBy({ username });
    if (!user) {
      const newUser = new User();
      newUser.username = username;
      newUser.password = password;
      await userRepository.save(newUser);
      return newUser;
    } else {
      throw {
        code: 403,
        message: "User is already exists",
      };
    }
  }
  public static async login(username: string, password: string) {
    const user = await userRepository.findOneBy({ username, password });
    if (!user) {
      throw {
        code: 403,
        message: "Wrong username or password",
      };
    }
    return user;
  }
  public static async findUserById(id: string) {
    const user = await userRepository.findOneBy({ id });
    if (!user) {
      throw {
        code: 403,
        message: "User is not exists or token has expired, please try to login again",
      };
    }
    return user;
  }
}