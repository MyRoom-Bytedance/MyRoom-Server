import { Context } from "koa";

export default class UserController {
  public static async test(ctx: Context) {
    ctx.body = "Hello Chino";
  }
}