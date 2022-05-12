import { Context } from "koa";
import { UserService } from "../service/user";

export default class UserController {
  public static async register(ctx: Context) {
    const { username, password } = ctx.request.body;
    try {
      const res = await UserService.createUser(username, password);
      ctx.body = {
        code: 200,
        msg: "success",
        data: res,
      };
    } catch (err) {
      ctx.body = {
        code: 403,
        msg: err.message,
      };
    };
  }
  public static async login(ctx: Context) {
    const { username, password } = ctx.request.body;
    try {
      const res = await UserService.findUser(username, password);
      ctx.body = {
        code: 200,
        msg: "login success!!",
        data: res
      };
    } catch (err) {
      ctx.body = {
        code: 403,
        msg: err.message,
      };
    };
  }
  public static async getInfo(ctx: Context) {
    const { username } = Object.assign({},ctx.query)
    try {
      const res = await UserService.getUser(username + '');
      ctx.body = {
        code: 200,
        msg: "success",
        data: res,
      };
    } catch (err) {
      ctx.body = {
        code: 403,
        msg: err.message,
      };
    };
  }
}