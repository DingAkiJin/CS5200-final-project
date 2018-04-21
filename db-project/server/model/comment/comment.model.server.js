var mongoose = require("mongoose");
var CommentSchema = require("./comment.schema.server");
var CommentModel = mongoose.model("CommentModel", CommentSchema);

CommentModel.createComment = createComment;
CommentModel.findCommentById = findCommentById;
CommentModel.findAllCommentsForPost = findAllCommentsForPost;
CommentModel.updateComment = updateComment;
CommentModel.deleteComment = deleteComment;
module.exports = CommentModel;


function createComment(postId, comment) {
  console.log('CommentModel', postId);
  comment._post = postId;
  return CommentModel.create(comment);
}

function findCommentById(commentId) {
  return CommentModel.findById(commentId);
}

function findAllCommentsForPost(postId) {
  return CommentModel.find({_post: postId});
}

function updateComment(commentId, comment) {
  return CommentModel.update({_id: commentId}, comment);
}

function deleteComment(commentId) {
  return CommentModel.remove({_id: commentId});
}
