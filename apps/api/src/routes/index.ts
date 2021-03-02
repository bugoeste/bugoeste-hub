import { Router } from 'express';
import { fileRoutes } from './files';

export const routes = Router();

routes.use('/files', fileRoutes);

routes.get('/', (_, res) => {
  res.send({ message: 'Welcome to api!' });
});
