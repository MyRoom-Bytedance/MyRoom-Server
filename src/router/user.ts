import Router from '@koa/router';

import UserController from '../controller/user';

const user = new Router()

user.post('/register', UserController.register);

user.post('/login', UserController.login);

user.post('/verify',UserController.verify)

user.get('/info',UserController.getInfo)

export default user