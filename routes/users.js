var express = require('express');
var router = express.Router();
const db = require('../models/index');

const {
  Op
} = require('sequelize');

/* GET users listing. */
router.get('/', (req, res, next) => {
  const min = req.query.min;
  const max = req.query.max;
  db.User.findAll({
    where: {
      age: {
        [Op.gte]: min,
        [Op.lte]: max
      }
    }
  }).then(usrs => {
    var data = {
      title: 'User/Index',
      content: usrs
    }
    res.render('users/index', data);
  });
});

module.exports = router;