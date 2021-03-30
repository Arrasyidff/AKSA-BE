"use strict"
const { Model } = require("sequelize")

const { v4: uuidv4 } = require("uuid")

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, {
        targetKey: "id",
        foreignKey: "authorId"
      })
    }
  }
  Book.init(
    {
      authorId: DataTypes.UUID,
      title: DataTypes.STRING,
      releaseYear: DataTypes.DATE,
      description: DataTypes.TEXT
    },
    {
      hooks: {
        beforeCreate(user, opts) {
          user.id = uuidv4()
        }
      },
      sequelize,
      modelName: "Book"
    }
  )
  return Book
}
