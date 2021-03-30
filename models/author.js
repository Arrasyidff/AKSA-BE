"use strict"
const { Model } = require("sequelize")

const { v4: uuidv4 } = require("uuid")

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Book, {
        sourceKey: "id",
        foreignKey: "authorId"
      })
    }
  }
  Author.init(
    {
      name: DataTypes.STRING,
      age: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1, 200]
        }
      },
      description: DataTypes.TEXT
    },
    {
      hooks: {
        beforeCreate(user, opts) {
          user.id = uuidv4()
        }
      },
      sequelize,
      modelName: "Author"
    }
  )
  return Author
}
