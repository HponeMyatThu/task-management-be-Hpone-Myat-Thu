const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "testdb",
  process.env.DB_USER || "admin",
  process.env.DB_PASSWORD || "admin123",
  {
    host: process.env.DB_HOST || "db",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;
