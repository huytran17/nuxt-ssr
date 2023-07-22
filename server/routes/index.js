const express = require("express");
const appRouter = express.Router();
const { airports } = require("../data/airports");

appRouter.get("/airports", function (req, res, next) {
  res.json(airports);
});

module.exports = appRouter;
