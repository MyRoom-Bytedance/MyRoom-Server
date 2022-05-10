import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-body";
import "reflect-metadata";
import logger from "./utils/logger";
import router from "./router";
import config from './config';
import dataSource from './db';

const { APP_PORT } = config;

dataSource.initialize().then(() => {
  const app = new Koa();

  app.use(logger());
  app.use(cors());
  app.use(bodyParser());

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(APP_PORT, () => {
    console.log(`Server listening on port ${APP_PORT}`);
  });
}).catch(err => {
  console.error(err);
});
