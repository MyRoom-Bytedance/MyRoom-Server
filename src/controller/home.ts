import { Context } from "koa";

export default class HomeController {
  public static async getHome(ctx: Context) {
    ctx.body = {
        msg : 'hello world'
    }
  }
}