import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-body";

import logger from "../utils/logger";
import router from "../router/index";

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

export default app;