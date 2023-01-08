const routes = require("express").Router();
const { User } = require('./app/models');

User.create({
  name: "Rafael",
  email: "rafael@gmail.com",
  password_hash: "123"
});

module.exports = routes;