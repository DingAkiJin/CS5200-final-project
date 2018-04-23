var connectionString = 'mongodb://admin:webdev123@ds131826.mlab.com:31826/heroku_msqmzbk9'; // for
// local

// if(process.env.MLAB_USERNAME_WEBPROJ) { // check if running remotely
//   var username = process.env.MLAB_USERNAME_WEBPROJ; // get from environment
//   var password = process.env.MLAB_PASSWORD_WEBPROJ;
//   connectionString = 'mongodb://' + username + ':' + password;
//   connectionString += '@ds131826.mlab.com:31826/heroku_msqmzbk9'; // use yours
// }

var mongoose = require('mongoose');
var db = mongoose.connect(connectionString, { useMongoClient: true });
module.exports = db;

