import Router from '@koa/router';

import UserController from '../controller/user';

const router = new Router();

router.post('/user/register', UserController.register);

export default router;