import Router from "@koa/router";

import HomeController from "../controller/home";

const home = new Router();

home.get("/list", HomeController.getList);

home.get("/", HomeController.getDetailsById);

export default home;
