// 全局工具类
function Util () {
  this.id = 0;
};

Util.prototype.getId = function () {
  return this.id++;
};

module.exports = exports = new Util();
