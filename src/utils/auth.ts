import { Context } from "koa";
import jwt from "jsonwebtoken";
import config from "../config";
const { JWT_SECRET } = config;

export default {
  sign: (ctx: Context, id: string) => {
    const expiresIn = 24 * 60 * 60;
    const token = jwt.sign({ id }, JWT_SECRET + "", { expiresIn });
    ctx.set("Authorization", `Bearer ${token}`);
    // ctx.cookies.set("myroom-token", token, {
    //   maxAge: expiresIn,
    //   httpOnly: true,
    // });
    return `Bearer ${token}`;
  }
};