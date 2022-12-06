const config = require("config.json")[process.env.NODE_ENV || "development"];
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  db.sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: "mysql",
  });

  // User init
  db.User = require("../users/user.model")(db.sequelize);
  // Todo-list init
  db.Todo = require("../todo-list/todo-list.model")(db.sequelize);

  // sync all models with database
  await db.sequelize.sync();
}
