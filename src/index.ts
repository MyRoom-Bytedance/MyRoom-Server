import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-body";
import "reflect-metadata";
import logger from "./utils/logger";
import router from "./router";
import config from "./config";
import dataSource from "./db";
import koajwt from "koa-jwt";
import catcherror from "./utils/catcherror";
const { APP_PORT, JWT_SECRET } = config;

dataSource
  .initialize()
  .then(() => {
    const app = new Koa();

    app.use(logger());
    app.use(cors());
    app.use(bodyParser());
    app.use(catcherror());
    app.use(
      koajwt({
        secret: JWT_SECRET + "",
      }).unless({
        // 配置白名单
        path: [
          /\/user\/register/,
          /\/user\/login/,
          /\/home\/list/,
          /\/home\/details/,
          /\/project\//,
        ],
      })
    );
    app.use(router.routes()).use(router.allowedMethods());

    app.listen(APP_PORT, () => {
      console.log(`Server listening on port ${APP_PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
