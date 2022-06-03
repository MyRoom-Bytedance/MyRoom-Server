import Router from "@koa/router";

import user from "./user";
import home from "./home";

const router = new Router();

router.use("/user", user.routes(), user.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());

export default router;
