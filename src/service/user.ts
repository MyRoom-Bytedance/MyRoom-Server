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
}