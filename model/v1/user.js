var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userSchema = new Schema ({
  id: Number,
  name: String,
  age: Number,
  sex: Number,
  address: String
});

var User = mongoose.model('User', userSchema);

module.exports = exports = User;
