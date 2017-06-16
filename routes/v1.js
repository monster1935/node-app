var User = require('../controller/v1/user') ;

var express  = require('express');
const router = express.Router();
router.post('/add', User.addUser);
router.post('/list', User.getUser);
router.post('/del', User.delUser);
router.post('/update', User.updateUser);
module.exports = exports = router;
