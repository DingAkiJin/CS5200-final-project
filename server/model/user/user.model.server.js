var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
// UserSchema.pre('save', function(next) {
//   if (!Array.isArray(this.choices)) {
//     this.choices = [];
//   }
//   this.choices.push("Article");
//   if (!Array.isArray(this.choices)) {
//     this.choices = [];
//   }
//   next();
// });
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByUsername = findUserByUsername;
UserModel.subscribeUser = subscribeUser;
UserModel.findAllUsers = findAllUsers;

UserModel.unfollowUser = unfollowUser;
UserModel.followUser = followUser;

UserModel.unsubscribeUser = unsubscribeUser;
UserModel.professionalUser = professionalUser;


module.exports = UserModel;

function followUser(id, follows) {
  return UserModel
    .update({_id: id},
      {$push: {follows: follows}}
    );
}
function unfollowUser(id, username){
  return UserModel.update(
    {_id: id},
    {$pull: {follows:
          {username: username}}});
}

  function createUser(user) {
    //console.log(user);
    const newUser = UserModel.create(user);
    return newUser;
  }

  function subscribeUser(userId ) {
    return UserModel
      .update({_id: userId}, {$set: {choices: ["Questions", "Articles"], roles: ["User", "Subscriber"]}});
  }

  function unsubscribeUser(userId) {
    console.log("unsub");
    return UserModel
      .update({_id: userId}, {$set: {choices: ["Articles"], roles: ["User"]}});
  }

  function professionalUser(userId) {
    return UserModel
      .update({_id: userId}, {$set: {choices: ["Articles", "Answers", "Questions"],
        roles: ["User", "Professional"]}});
  }

  function findUserByUsername(username) {
    // what it returns is a promise
    console.log(username, "from model.server");
    return UserModel.findOne({username: username});
  }

  function findUserById(userId) {
    return UserModel.findOne({_id: userId});
  }

  function findUserByCredentials(username, password) {
    const user = UserModel.findOne({username: username, password: password});
    return user;
  }

  function updateUser(userId, user) {
    delete user._id;
    return UserModel
      .update({_id: userId}, user);
  }

  function deleteUser(userId) {
    return UserModel.remove({_id: userId});
  }

function findAllUsers() {
  return UserModel.find();
}

