import Router from "@koa/router";
import StsController from "../controller/stsController";

const sts = new Router();

sts.get("/info", StsController.getStsInfo);

export default sts;