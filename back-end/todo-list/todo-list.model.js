const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    label: { type: DataTypes.TEXT, allowNull: false },
    done: { type: DataTypes.BOOLEAN, allowNull: false, default: true },
  };

  const options = {
    timestamps: true,
  };

  return sequelize.define("web_todo_list", attributes, options);
}
