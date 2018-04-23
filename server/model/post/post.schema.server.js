var mongoose = require("mongoose");
var PostSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  type: String,
  text: String,
  author: String,
  title: String,
  dateCreated: {type: Date, default: Date.now},
  category: {
    type: String,
    enum: ["general", "politics","business","technology","science", "sports"],
    default: "general"
  }
}, {collection: "post"});
module.exports = PostSchema;
