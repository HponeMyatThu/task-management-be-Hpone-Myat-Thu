const express = require("express");
const sequelize = require("./db");
const TaskModel = require("./models/task");
const cors = require("cors");

const Task = TaskModel(sequelize);

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected!");

    app.post("/tasks", async (req, res) => {
      const { title, description, status, priority, dueDate } = req.body;
      const task = await Task.create({
        title,
        description,
        status,
        priority,
        dueDate,
      });
      res.json(task);
    });

    app.get("/tasks", async (req, res) => {
      const tasks = await Task.findAll();
      res.json(tasks);
    });

    app.get("/tasks/:id", async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });
      res.json(task);
    });

    app.put("/tasks/:id", async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });
      const { title, description, status, priority, dueDate } = req.body;
      await task.update({ title, description, status, priority, dueDate });
      res.json(task);
    });

    app.delete("/tasks/:id", async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });
      await task.destroy();
      res.json({ message: "Task deleted" });
    });

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

start();
