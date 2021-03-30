"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint("Books", {
      fields: ["authorId"],
      type: "foreign key",
      name: "fk_authorId",
      references: {
        //Required field
        table: "Authors",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeConstraint("Books", "fk_authorId")
  }
}
