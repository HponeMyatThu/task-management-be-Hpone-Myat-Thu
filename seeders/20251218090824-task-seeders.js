"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "Finish project documentation",
          description: "Complete the documentation for the new project",
          status: "todo",
          priority: "high",
          dueDate: new Date("2025-12-25"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Team meeting",
          description: "Discuss project updates and blockers",
          status: "in_progress",
          priority: "medium",
          dueDate: new Date("2025-12-20"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Code review",
          description: "Review the pull requests for the last sprint",
          status: "done",
          priority: "low",
          dueDate: new Date("2025-12-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Deploy to staging",
          description: "Deploy the latest version to the staging environment",
          status: "todo",
          priority: "high",
          dueDate: new Date("2025-12-18"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Update client on progress",
          description: "Send weekly status update to the client",
          status: "in_progress",
          priority: "medium",
          dueDate: new Date("2025-12-19"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
