const config = require("config.json")[process.env.NODE_ENV || "development"];
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");

module.exports = {
  authenticate,
};

async function authenticate({ username, password }) {
  const user = await db.User.scope("withHash").findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw "Username or password is incorrect";

  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });
  return { ...omitHash(user.get()), token };
}

// helper functions
async function getUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw "User not found";
  return user;
}

function omitHash(user) {
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}
