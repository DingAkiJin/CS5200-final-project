var mongoose = require("mongoose");
var CommentSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  _post: {type: mongoose.Schema.Types.ObjectId, ref: "PostModel"},
  text: String,
  userName: String,
  dateCreated: {type: Date, default: Date.now},
}, {collection: "comment"});
module.exports = CommentSchema;
