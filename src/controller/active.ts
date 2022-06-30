import {Context} from "koa";
import {ActiveService} from "../service/active";

export default class ActiveController {
  public static async getActiveProject(ctx: Context) {
    const project = await ActiveService.getActiveProject();
    ctx.body = {
      status: 200,
      msg: "success",
      data: project
    };
  }

  public static async setActiveProject(ctx: Context) {
    const projectId = Number(ctx.request.query.projectId);
    if (!projectId) {
      throw {
        code: 403,
      }
    }
    await ActiveService.setActiveProject(projectId);
    ctx.body = {
      status: 200,
      msg: "success",
    };
  }
}