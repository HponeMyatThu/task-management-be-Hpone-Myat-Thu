const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected!");

    app.use("/tasks", taskRoutes);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

start();
