import { AgentHouse } from "../entity/agent_house";
import dataSource from '../db';

const homeRepository = dataSource.getRepository(AgentHouse);

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
      throw new Error("Home not found");
    } else {
      return home;
    }
  }
};