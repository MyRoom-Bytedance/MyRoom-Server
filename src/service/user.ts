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
  public static async updateUser(id: string, body: any) {
    const user = await userRepository.findOneBy({ id });
    if (!user) {
      throw {
        code: 403,
        message: "User is not exists or token has expired, please try to login again",
      };
    }
    if (body.hasOwnProperty('pre_password') && body.hasOwnProperty('new_password')) {
      if (user.password != body.pre_password) {
        throw {
          code: 403,
          message: "Wrong old password",
        };
      }
      user.password = body.new_password;
    }
    if (body.hasOwnProperty("username")) {
      const old_user = await userRepository.findOneBy({ username: body.username });
      if (old_user && old_user.id != id) {
        throw {
          code: 403,
          message: "username is already exists",
        }
      }
      user.username = body.username;
    }
    await userRepository.save(user);
  }
}