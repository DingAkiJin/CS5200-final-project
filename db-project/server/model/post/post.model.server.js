var mongoose = require("mongoose");
var PostSchema = require("./post.schema.server");
var PostModel = mongoose.model("PostModel", PostSchema);

PostModel.createPost = createPost;
PostModel.findPostById = findPostById;
PostModel.findAllPostsForUser = findAllPostsForUser;
PostModel.updatePost = updatePost;
PostModel.deletePost = deletePost;
PostModel.findTypesForUser = findTypesForUser;
PostModel.findArticlesByCategory = findArticlesByCategory;
PostModel.findAllPosts = findAllPosts;

module.exports = PostModel;

function createPost(userId, post) {
  delete post._id;
  post._user = userId;
  // console.log(post);
  const w = PostModel.create(post);
  // console.log("create post: ", w);
  return w;
}
function findAllPostsForUser(userId) {
  // console.log('findAllPosts: ', pageId);
  const posts = PostModel.find({_user: userId});
  // console.log(posts);
  return posts;
}

function findTypesForUser(userId, type) {
  // console.log('findAllPosts: ', pageId);
  const posts = PostModel.find({_user: userId, type: type});
  // console.log(posts);
  return posts;
}

function findPostById(postId) {
  return PostModel.findById(postId);
}
function updatePost(postId, post) {
  delete post._id;
  // console.log(post);
  return PostModel
    .update({_id: postId},{
      $set : post
    })
}
function deletePost(postId) {
  return PostModel.remove({_id: postId});
}

function findArticlesByCategory(category) {
  return PostModel.find({category: category});
}

function findAllPosts() {
  console.log("from model.server");
  return PostModel.find();
}

