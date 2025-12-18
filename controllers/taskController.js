const taskService = require("../services/taskService");

const getTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json({ success: true, data: tasks });
};

const getTask = async (req, res) => {
  const task = await taskService.getTaskById(req.params.id);
  if (!task)
    return res
      .status(404)
      .json({ success: false, data: { message: "Task not found" } });
  res.json({ success: true, data: task });
};

const createTask = async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.json({ success: true, data: task });
};

const updateTask = async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  if (!task)
    return res
      .status(404)
      .json({ success: false, data: { message: "Task not found" } });
  res.json({ success: true, data: task });
};

const deleteTask = async (req, res) => {
  const deleted = await taskService.deleteTask(req.params.id);
  if (!deleted)
    return res
      .status(404)
      .json({ success: false, data: { message: "Task not found" } });
  res.json({ success: true, data: { message: "Task deleted" } });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
