module.exports = function (app) {
  // var mongoose = require('mongoose');
  // mongoose.connect('mongodb://jin:jin@ds157475.mlab.com:57475/webdev-cs5610', { useMongoClient: true });
  // mongoose.Promise = global.Promise;

  require("./service/user.server.service")(app);
  require("./service/post.server.service")(app);
  require("./service/comment.service.server")(app);
  var db = require("./model/models.server");

};
