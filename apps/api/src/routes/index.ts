import { Router } from 'express';

export const routes = Router();
routes.get('/', (_, res) => {
  res.send({ message: 'Welcome to api!' });
});
