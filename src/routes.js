const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello, world!' });
});

module.exports = routes;
