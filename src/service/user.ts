import { User } from '../entity/user';
import dataSource from '../db';

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
      throw new Error('User already exists');
    }
  }
  public static async findUser(username: string, password: string) {
    const user = await userRepository.findOneBy({ username, password });
    if (user) {
      return user;
    } else {
      throw new Error("User is no exists");
    }
  }
  public static async getUser(username: string) {
      const user = await userRepository.findOneBy({ username });
      if(!user) {
          throw new Error("User is no exists");
      } else {
          return user;
      }
  }
}