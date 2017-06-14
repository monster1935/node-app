
var test = require('./test.js');
var test1 = require('./test1.js');

module.exports = function(app) {
  app.use('/test', test);
  app.use('/test1', test1);
};
