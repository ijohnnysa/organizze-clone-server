import app from './app';

const server = app;

const port = 3333;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
