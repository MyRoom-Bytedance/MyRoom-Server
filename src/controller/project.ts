import {ProjectService} from "../service/project";
import {Context} from "koa";
import {ProjectRequest} from "../type/project";
import {UserService} from "../service/user";

export default class ProjectController {
  public static async getList(ctx: Context) {

    const res = await ProjectService.getList();

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async getDetailsById(ctx: Context) {
    const id = ctx.request.query.id;
    if (id === "" || isNaN(Number(id))) {
      throw {
        code: 403,
        message: "Invalid params",
      };
    }

    const res = await ProjectService.getDetailsById(Number(id));

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async addProject(ctx: Context) {
    const body: ProjectRequest = ctx.request.body;
    const id = "2886f4be-4d79-4b22-829c-c38036f6ede1";
    if (!body.name || !body.content) {
      throw {
        code: 403,
        message: "Invalid params",
      }
    }

    const res = await ProjectService.addProject(body, await UserService.findUserById(id));

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async updateProject(ctx: Context) {
    const body: ProjectRequest = ctx.request.body;
    if (!body.id) {
      throw {
        code: 403,
      }
    }
    await ProjectService.getDetailsById(body.id);

    const res = await ProjectService.updateProject(body, body.id);

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async deleteProject(ctx: Context) {
    const id = ctx.request.query.id;
    if (id === "" || isNaN(Number(id))) {
      throw {
        code: 403,
        message: "Invalid params",
      };
    }

    await ProjectService.getDetailsById(Number(id));

    await ProjectService.deleteProject(Number(id));

    ctx.body = {
      status: 200,
      msg: "success",
    };
  }
}