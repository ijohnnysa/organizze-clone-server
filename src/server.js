import 'dotenv/config';
import app from './app';

const server = app;

const port = process.env.APP_PORT;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
