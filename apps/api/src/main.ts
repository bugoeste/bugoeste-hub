import express from 'express';
import { initDb } from './models/db';
import { routes } from './routes';

async function start() {
  await initDb();
  const app = express();

  app.use('/api', routes);

  const port = process.env.port || 3333;
  const server = app.listen(port);

  server.on('listening', () =>
    console.log(`Listening at http://localhost:${port}/api`)
  );
}

start();
