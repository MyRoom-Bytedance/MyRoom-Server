import { Context } from "koa";
import { HomeService } from "../service/home";
import { UserService } from "../service/user";
import { HomeRequest } from "../type/home";

export default class HomeController {
  public static async getList(ctx: Context) {
    const size = Number(ctx.request.query.size || 10);
    const offset = Number(ctx.request.query.offset || 0);
    if (isNaN(size) || isNaN(offset) || size < 0 || offset < 0) {
      throw {
        code: 403,
        message: "Invalid params",
      };
    }

    const res = await HomeService.getList(size, offset);

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

    const res = await HomeService.getDetailsById(Number(id));

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async addHome(ctx: Context) {
    const body: HomeRequest = ctx.request.body;
    const id = ctx.state.user.id;
    if (!body.listing_name || !body.pricing || !body.floor_plan_room || !body.floor_plan_hall || !body.squaremeter || !body.total_floor) {
      throw {
        code: 403,
        message: "Invalid params",
      }
    }

    const res = await HomeService.addHome(body, await UserService.findUserById(id));

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async updateHome(ctx: Context) {
    const body: HomeRequest = ctx.request.body;
    if (!body.id) {
      throw {
        code: 403,
        message: "Invalid params",
      }
    }
    await HomeService.getDetailsById(body.id);

    const res = await HomeService.updateHome(body, body.id);

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async deleteHome(ctx: Context) {
    const id = ctx.request.query.id;
    if (id === "" || isNaN(Number(id))) {
      throw {
        code: 403,
        message: "Invalid params",
      };
    }
    await HomeService.getDetailsById(Number(id));

    await HomeService.deleteHome(Number(id));

    ctx.body = {
      status: 200,
      msg: "success",
    };
  }
}
