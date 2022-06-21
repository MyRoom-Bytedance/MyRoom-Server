import { Context } from "koa";
import { UserService } from "../service/user";
import Auth from "../utils/auth";

export default class UserController {
  public static async register(ctx: Context) {
    const { username, password } = ctx.request.body;

    const res = await UserService.createUser(username, password);

    ctx.body = {
      status: 200,
      msg: "success",
      data: {
        id: res.id,
        username: res.username,
      },
    };
  }

  public static async getInfo(ctx: Context) {
    const id = ctx.state.user.id;

    const res = await UserService.findUserById(id + "");

    ctx.body = {
      status: 200,
      msg: "success",
      data: {
        id: res.id,
        username: res.username,
      },
    };
  }

  public static async login(ctx: Context) {
    const { username, password } = ctx.request.body;

    const res = await UserService.login(username, password);
    
    ctx.body = {
      status: 200,
      msg: "login success",
      token: Auth.sign(ctx, res.id),
    };
  }
}
