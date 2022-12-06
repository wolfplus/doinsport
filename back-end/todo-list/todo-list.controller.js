const express = require("express");
const router = express.Router();
const authorize = require("_middleware/authorize");
const todoService = require("./todo-list.service");

// routes
router.get("/:page?/:limit?", getAll);

module.exports = router;

function getAll(req, res, next) {
  todoService
    .getAll(req.params.page, req.params.limit)
    .then((user) => res.json(user))
    .catch(next);
}
