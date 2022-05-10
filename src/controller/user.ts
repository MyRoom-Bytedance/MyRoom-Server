import { Context } from "koa";
import { UserService } from "../service/user";

export default class UserController {
  public static async register(ctx: Context) {
    const { username, password } = ctx.request.body;
    try {
      const res = await UserService.createUser(username, password);
      ctx.body = {
        code: 0,
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