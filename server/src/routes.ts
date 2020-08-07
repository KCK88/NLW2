import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classescontroler = new ClassesController
const connectionsController = new ConnectionsController

routes.get('/classes', classescontroler.index);
routes.post('/classes', classescontroler.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;

// 1:48:24