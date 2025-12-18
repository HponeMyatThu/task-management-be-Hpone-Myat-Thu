const TaskModel = require("../models/task");
const sequelize = require("../db");
const Task = TaskModel(sequelize);

const getAllTasks = async () => {
  return Task.findAll({ order: [["id", "ASC"]] });
};

const getTaskById = async (id) => {
  return Task.findByPk(id);
};

const createTask = async (data) => {
  return Task.create(data);
};

const updateTask = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) return null;
  await task.update(data);
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) return null;
  await task.destroy();
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
