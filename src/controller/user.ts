import { Context } from "koa";
import { UserService } from "../service/user";
import config from "../config"
import jwt from "jsonwebtoken"
const {JWT_SECRET} = config
 
export default class UserController {
  public static async register(ctx: Context) {
    const { username, password } = ctx.request.body;
    try {
      const res = await UserService.createUser(username, password);
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
  public static async login(ctx: Context) {
    const { username, password } = ctx.request.body;
    try {
      const res = await UserService.findUser(username, password);
      const token = jwt.sign(
        {
            name: username
        },
        JWT_SECRET + '', // secret
        { 
          expiresIn: 60 * 60 
        } // 60 * 60 s
      );
      ctx.body = {
        status: 200,
        msg: "login success!!",
        data: res,
        token
      };
    } catch (err) {
      ctx.body = {
        status: 403,
        msg: err.message,
      };
    };
  }
  public static async verify(ctx: Context) {
    const { mobile , captcha } = ctx.request.body;
    try {
        if(captcha) {
              const res = await UserService.getUser(mobile);
              const token = jwt.sign(
                {
                    name: mobile
                },
                JWT_SECRET + '', // secret
                { 
                  expiresIn: 60 * 60 
                } // 60 * 60 s
              );
              
              ctx.body = {
                status: 200,
                msg: "login success!!",
                data: res,
                token
              };
        } else {
            ctx.body = {
                status: 403,
                msg: '没输入验证码！！'
            };
        }
    } catch (err) {
      ctx.body = {
        status: 403,
        msg: err.message,
      };
    };
  }
  public static async getInfo(ctx: Context) {
    const { username } = Object.assign({},ctx.query)
    try {
      const res = await UserService.getUser(username + '');
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