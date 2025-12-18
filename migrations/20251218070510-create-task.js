"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(225),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM("todo", "in_progress", "done"),
        allowNull: false,
        defaultValue: "todo",
      },
      priority: {
        type: Sequelize.ENUM("low", "medium", "high"),
        allowNull: false,
        defaultValue: "medium",
      },
      dueDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });

    // Indexes
    await queryInterface.addIndex("Tasks", ["status"], { name: "idx_status" });
    await queryInterface.addIndex("Tasks", ["priority"], {
      name: "idx_priority",
    });
    await queryInterface.addIndex("Tasks", ["status", "priority"], {
      name: "idx_status_priority",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Tasks");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Tasks_status";'
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Tasks_priority";'
    );
  },
};
