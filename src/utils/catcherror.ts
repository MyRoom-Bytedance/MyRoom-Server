import { Context, Next } from "koa";
export default function catcherror() {
  return async (ctx: Context, next: Next) => {
    try {
      await next();
    } catch (err) {
      if (err?.code === 403) {
        return ctx.body = {
          status: 403,
          msg: err.message,
        };
      } else {
        console.log(err);
        return ctx.body = {
          status: 500,
          msg: 'server error',
        };
      }
    }
  };
}

