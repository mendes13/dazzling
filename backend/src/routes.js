import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import DazzleController from './app/controllers/DazzleController';
import TechController from './app/controllers/TechController';
import StackController from './app/controllers/StackController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/dazzles', DazzleController.index);
routes.get('/dazzles/:id', DazzleController.show);
routes.post('/dazzles', DazzleController.store);
routes.put('/dazzles/:id', DazzleController.update);
routes.delete('/dazzles/:id', DazzleController.delete);

routes.get('/techs', TechController.index);
routes.post('/admin/techs', TechController.store);
routes.put('/admin/techs/:id', TechController.update);
routes.delete('/admin/techs/:id', TechController.delete);

routes.get('/stacks/:dazzle_id', StackController.index);
routes.post('/stacks', StackController.store);
routes.put('/stacks/:id', StackController.update);
routes.delete('/stacks/:id', StackController.delete);

export default routes;
