import dataSource from "../db";
import {ProjectRequest} from "../type/project";
import {User} from "../entity/user";
import {Project} from "../entity/project";

const projectRepository = dataSource.getRepository(Project);

export class ProjectService {
  public static async getList(size: number, offset: number) {
    const projects = await projectRepository.createQueryBuilder().skip(offset).take(size).getMany();
    return projects;
  }
  public static async getDetailsById(id: number) {
    const project = await projectRepository.findOneBy({
      id,
    });
    if (!project) {
      throw {
        code: 403,
        message: "Project not found",
      }
    } else {
      return project;
    }
  }
  public static async addProject(project: ProjectRequest, creator: User) {
    const manager = dataSource.manager;
    const res = await manager.insert(Project, {
      ...project,
      creator,
    });
    const { id } = res.identifiers[0];
    return await this.getDetailsById(id);
  }
  public static async updateProject(project: ProjectRequest, id: number) {
    const manager = dataSource.manager;
    await manager.update(Project, id, project);
    return await this.getDetailsById(id);
  }
  public static async deleteProject(id: number) {
    const manager = dataSource.manager;
    const res = await manager.delete(Project, id);
  }
}