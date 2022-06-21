import { Home } from "../entity/home";
import { User } from "../entity/user";
import type { HomeRequest } from "../type/home";
import dataSource from '../db';

const homeRepository = dataSource.getRepository(Home);

export class HomeService {
  public static async getList(size: number, offset: number) {
    const homes = await homeRepository.createQueryBuilder().skip(offset).take(size).getMany();
    return homes;  
  }
  public static async getDetailsById(id: number) {
    const home = await homeRepository.findOneBy({
      id,
    });
    if (!home) {
      throw {
        code: 403,
        message: "Home not found",
      }
    } else {
      return home;
    }
  }
  public static async addHome(home: HomeRequest, creator: User) {
    const manager = dataSource.manager;
    const res = await manager.insert(Home, {
      ...home,
      creator,
    });
    const { id } = res.identifiers[0];
    return await this.getDetailsById(id);
  }
  public static async updateHome(home: HomeRequest, id: number) {
    const manager = dataSource.manager;
    await manager.update(Home, id, home);
    return await this.getDetailsById(id);
  }
  public static async deleteHome(id: number) {
    const manager = dataSource.manager;
    const res = await manager.delete(Home, id);
  }
};