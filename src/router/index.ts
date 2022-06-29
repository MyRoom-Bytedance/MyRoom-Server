import Router from "@koa/router";

import user from "./user";
import home from "./home";
import project from "./project";

const router = new Router();

router.use("/user", user.routes(), user.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());
router.use("/project", project.routes(), project.allowedMethods());

export default router;
