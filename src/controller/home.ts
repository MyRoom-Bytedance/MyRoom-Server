import { Context } from "koa";
import { HomeService } from "../service/home";

export default class HomeController {
  public static async getList(ctx: Context) {
    const size = Number(ctx.request.query.size || 10);
    const offset = Number(ctx.request.query.offset || 0);
    try {
      if (isNaN(size) || isNaN(offset) || size < 0 || offset < 0) {
        throw new Error("Invalid params");
      }
      const res = await HomeService.getList(size, offset);
      ctx.body = {
        status: 200,
        msg: "success",
        data: res,
      };
    } catch (err) {
      ctx.body = {
        status: 403,
        msg: err.message,
      };
    };
  }
  public static async getDetailsById(ctx: Context) {
    const id = ctx.request.query.id;
    try {
      if (id === '' || isNaN(Number(id))) {
        throw new Error("Invalid params");
      }
      const res = await HomeService.getDetailsById(Number(id));
      ctx.body = {
        status: 200,
        msg: "success",
        data: res,
      };
    } catch (err) {
      ctx.body = {
        status: 403,
        msg: err.message,
      };
    };
  }
}