const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    username: { type: DataTypes.STRING(30), allowNull: false },
    firstname: { type: DataTypes.STRING(30), allowNull: false },
    lastname: { type: DataTypes.STRING(30), allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING(40), allowNull: false },
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withHash: { attributes: {} },
    },
    timestamps: false,
  };

  return sequelize.define("web_user", attributes, options);
}
