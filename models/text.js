"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Text extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Text.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId",
      });
    }
  }
  Text.init(
    {
      textName: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Text",
      tableName: "texts",
    }
  );
  return Text;
};
