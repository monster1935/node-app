var express  = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
  res.send({
    resCode: 100,
    resDesc: 'this is a test message'
  });
});
module.exports = exports = router;
