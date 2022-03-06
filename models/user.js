'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    pass: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    age: {
      type: DataTypes.STRING,
      validate: {
        isInt: true,
        min: 0
      }
    }
  }, {});
  User.associate = function (models) {
    // associate can be defined here
  };
  return User;
};