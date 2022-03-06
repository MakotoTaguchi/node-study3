'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "名前は必ず入力して下さい。"
        }
      }
    },
    pass: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "パスワードは必ず入力下さい。"
        }
      }
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "メールアドレスを入力下さい。"
        }
      }
    },
    age: {
      type: DataTypes.STRING,
      validate: {
        isInt: {
          msg: "整数を入力下さい。"
        },
        min: {
          args: [0],
          msg: "ぜろ以上の値が必要です。"
        }
      }
    }
  }, {});
  User.associate = function (models) {
    // associate can be defined here
  };
  return User;
};