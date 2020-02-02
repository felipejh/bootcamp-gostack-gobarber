import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Middlware global somente para as rotas que estão abaixo desta linha
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
