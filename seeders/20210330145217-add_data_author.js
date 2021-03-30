"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          id: '0a65dbec-aa68-4c92-915d-6bc47a28544a',
          name: 'arfafa',
          age: 21,
          description: 'ganteng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '826d0ecb-fff3-4c14-a8c4-7d691bfd4436',
          name: 'anton',
          age: 22,
          description: 'ganteng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '1d529300-d7bd-4185-9c5d-4b4fdba374bd',
          name: 'fadel',
          age: 22,
          description: 'ganteng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '821eab35-7e98-4f48-8be4-b966e6bac356',
          name: 'Ar',
          age: 23,
          description: 'ganteng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'd5161867-d045-4d7b-8866-bc3aadfe3422',
          name: 'Rasyid',
          age: 22,
          description: 'ganteng',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '6799a047-5f26-4863-a236-283b07b15dc1',
          name: 'Faton',
          age: 23,
          description: 'ganteng',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete("Authors", null, {})
  }
}
