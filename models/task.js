"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Task extends Model {}

  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      status: {
        type: DataTypes.ENUM("todo", "in_progress", "done"),
        defaultValue: "todo",
      },
      priority: {
        type: DataTypes.ENUM("low", "medium", "high"),
        defaultValue: "medium",
      },
      dueDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "Tasks",
      timestamps: true,
    }
  );

  return Task;
};
