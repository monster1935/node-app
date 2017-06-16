var UserModel = require('../../model/v1/user');
var util = require('../../util');

function User () {}
User.prototype.addUser = function (req, res, next) {
  var user = {
    id: util.getId(),
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    address: req.body.address
  };
  UserModel.create(user);
  res.send({
    resCode: 100,
    resDesc: '成功'
  });
};

User.prototype.getUser = function (req, res, next) {
  var name = req.body.name;
  if (name) {
    UserModel.find({name: name},function (err, userList) {
      res.send({
        resCode: 100,
        data: null,
        dataList: userList.reverse(),
        resDesc: '成功'
      });
    });
  } else {
    UserModel.find({},function (err, userList) {
      res.send({
        resCode: 100,
        data: null,
        dataList: userList.reverse(),
        resDesc: '成功'
      });
    });
  }

};
User.prototype.delUser = function (req, res, next) {
  var userId = req.body.id;
  UserModel.findOneAndRemove({id: userId}, function (err, user) {
    if (err) {
      console.error(err);
    } else {
      res.send({
        resCode: 100,
        resDesc: '成功',
        data: user,
        dataList: []
      });
    }
  });
};

User.prototype.updateUser = function (req, res, next) {
    var user = req.body;
    UserModel.findOneAndUpdate({id: user.id }, {$set: {
      name: user.name,
      age: user.age,
      sex: user.sex,
      address: user.address
    }}, function (err, user) {
      if (err) {
        console.log(error);
      } else {
        res.send({
          resCode: 100,
          resDesc: '成功',
          data: user,
          dataList: []
        });
      }
    });
};

module.exports = exports = new User();
