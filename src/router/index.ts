import Router from "@koa/router";

import user from "./user";
import home from "./home";
import project from "./project";
import sts from "./sts";

const router = new Router();

router.use("/user", user.routes(), user.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());
router.use("/project", project.routes(), project.allowedMethods());
router.use("/sts", sts.routes(), sts.allowedMethods());

export default router;
