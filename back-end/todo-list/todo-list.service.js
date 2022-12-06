const config = require("config.json")[process.env.NODE_ENV || "development"];
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");

module.exports = {
  getAll,
};

async function getAll(page, limit) {
  return await db.Todo.findAll();
}
