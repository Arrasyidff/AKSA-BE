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
      "Books",
      [
        {
          id: "54bff6b2-b4fb-49b3-8b1b-06b29547f563",
          title: "test1",
          authorId: "6799a047-5f26-4863-a236-283b07b15dc1",
          releaseYear: "2020-12-02",
          description: "skdjbcd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6950af53-e6c7-48b1-a149-a3480029a98d",
          title: "test2",
          authorId: "6799a047-5f26-4863-a236-283b07b15dc1",
          releaseYear: "2020-12-02",
          description: "skdjbcd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "2b94d884-7a81-49f5-b2ec-374d33a9b352",
          title: "test3",
          authorId: "d5161867-d045-4d7b-8866-bc3aadfe3422",
          releaseYear: "2020-12-02",
          description: "skdjbcd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "fb53eeaf-c0c8-4ab6-985c-1d40d3e793b1",
          title: "test4",
          authorId: "826d0ecb-fff3-4c14-a8c4-7d691bfd4436",
          releaseYear: "2020-12-02",
          description: "skdjbcd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "1784332f-b4f0-445a-9de2-c4e1dcd155fa",
          title: "test5",
          authorId: "826d0ecb-fff3-4c14-a8c4-7d691bfd4436",
          releaseYear: "2020-12-02",
          description: "skdjbcd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "1c6dd964-02a8-4859-adc5-b6aa75c6d95d",
          title: "test6",
          authorId: "826d0ecb-fff3-4c14-a8c4-7d691bfd4436",
          releaseYear: "2020-12-02",
          description: "skdjbcd",
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

    await queryInterface.bulkDelete("Books", null, {})
  }
}
