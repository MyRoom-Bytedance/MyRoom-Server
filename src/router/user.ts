import Router from '@koa/router';

import UserController from '../controller/user';

const user = new Router()

user.post('/register', UserController.register);

user.post('/login', UserController.login);

user.get('/info',UserController.getInfo)

export default user