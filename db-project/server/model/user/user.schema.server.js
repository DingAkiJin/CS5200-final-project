var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
  username: String,
  follows: [{userId: String, username: String}],
  _followers: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
  _following: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  roles: {
    type: [String],
    enum: ["Admin","User","Subscriber","Professional", "Writer"],
    default: ["User"],
  },
  choices:{
    type: [String],
    enum: ["Article","Question","Answer"],
    default: [],
  },
  dateCreated: {type: Date, default: Date.now},
  // register: Boolean,
  // subscribe: Boolean,
}, {collection: "user"});
module.exports = UserSchema;
