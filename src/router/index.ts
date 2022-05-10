import Router from '@koa/router';

import UserController from '../controller/user';

const router = new Router();

router.get('', UserController.test);

export default router;