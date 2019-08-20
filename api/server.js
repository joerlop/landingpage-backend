const express = require('express');

const configureMiddleware = require('./middleware.js');
const emailsRouter = require('../emails/emails-router.js');

const server = express();

configureMiddleware(server);

server.use('/api/emails', emailsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;