import { Context } from "koa";
import { UserService } from "../service/user";
import config from "../config";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = config;

export default class UserController {
  public static async register(ctx: Context) {
    const { username, password } = ctx.request.body;

    const res = await UserService.createUser(username, password);

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
  public static async login(ctx: Context) {
    const { username, password } = ctx.request.body;

    const res = await UserService.findUser(username, password);
    const token = jwt.sign(
      {
        name: username,
      },
      JWT_SECRET + "", // secret
      {
        expiresIn: 60 * 60,
      } // 60 * 60 s
    );

    ctx.body = {
      status: 200,
      msg: "login success!!",
      data: res,
      token: "Bearer " + token,
    };
  }
  public static async verify(ctx: Context) {
    const { mobile, captcha } = ctx.request.body;
    if (!captcha) {
      throw {
        code: 403,
        message: "captcha is required",
      };
    }

    const res = await UserService.getUser(mobile);
    const token = jwt.sign(
      {
        name: mobile,
      },
      JWT_SECRET + "", // secret
      {
        expiresIn: 60 * 60,
      } // 60 * 60 s
    );

    ctx.body = {
      status: 200,
      msg: "login success",
      data: res,
      token,
    };
  }
  public static async getInfo(ctx: Context) {
    const { username } = Object.assign({}, ctx.query);

    const res = await UserService.getUser(username + "");

    ctx.body = {
      status: 200,
      msg: "success",
      data: res,
    };
  }
}
