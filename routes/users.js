var express = require('express');
var router = express.Router();
const db = require('../models/index');

// const {
//   Op
// } = require('sequelize');

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   const nm = req.query.name;
//   const ml = req.query.mail;
//   db.User.findAll({
//     where: {
//       [Op.or]: [{
//           name: {
//             [Op.like]: '%' + nm + '%'
//           }
//         },
//         {
//           mail: {
//             [Op.like]: '%' + ml + '%'
//           }
//         }
//       ]
//     }
//   }).then(usrs => {
//     var data = {
//       title: 'User/Index',
//       content: usrs
//     }
//     res.render('users/index', data);
//   });
// });

router.get('/', (req, res, next) => {
  db.User.findAll().then(usrs => {
    var data = {
      title: 'Users/Index',
      content: usrs
    }
    res.render('users/index', data);
  });
});

router.get('/add', (req, res, next) => {
  var data = {
    title: 'User/add'
  }
  res.render('users/add', data);
});

router.post('/add', (req, res, next) => {
  db.sequelize.sync()
    .then(() => db.User.create({
      name: req.body.name,
      pass: req.body.pass,
      mail: req.body.mail,
      age: req.body.age
    }))
    .then(usr => {
      res.redirect('/users');
    });
});

router.get('/edit', (req, res, next) => {
  db.User.findByPk(req.query.id)
    .then(usr => {
      var data = {
        title: 'User/Edit',
        form: usr
      }
      res.render('users/edit', data);
    });
});

router.post('/edit', (req, res, next) => {
  db.sequelize.sync()
    .then(() => db.User.update({
      name: req.body.name,
      pass: req.body.pass,
      mail: req.body.mail,
      age: req.body.age
    }, {
      where: {
        id: req.body.id
      }
    }))
    .then(usr => {
      res.redirect('/users');
    });
});

module.exports = router;