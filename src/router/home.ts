import Router from "@koa/router";

import HomeController from "../controller/home";

const home = new Router();

home.get("/list", HomeController.getList);

home.get("/details", HomeController.getDetailsById);

home.post("/add", HomeController.addHome);

home.post("/update", HomeController.updateHome);

home.get("/delete", HomeController.deleteHome);

export default home;
