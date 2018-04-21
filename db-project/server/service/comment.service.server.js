module.exports = function(app) {

  var CommentModel = require("../model/comment/comment.model.server");

  app.post("/api/post/:postId/comment", createComment);
  app.get("/api/post/:postId/comment", findCommentsByPost);
  app.get("/api/comment/:commentId", findCommentById);
  //app.put("/api/comment/:commentId", updateComment);
  //app.delete("/api/comment/:commentId", deleteComment);

  function createComment(req, res) {
    var postId = req.params['postId'];
    var comment = req.body;
    console.log('CommentServer', postId);
    console.log('CommentServer', comment.userName);
    CommentModel.createComment(postId, comment)
      .then (function (comment) {
        console.log(comment);
        CommentModel.findAllCommentsForPost(postId)
          .then(function (comments) {
            res.json(comments);
          });
      },
        function (err) {
        sendStatus(300).send("Error when trying to create new comment for post.");
        });
  }

  function findCommentById(req, res) {
    var commentId = req.params['commentId'];
    CommentModel.findCommentById(commentId).then (function (comment) {
      console.log(comment);
      res.json(comment);
    })
  }

  function findCommentsByPost(req, res) {
    var postId = req.params['postId'];
    console.log(postId, ": findCommentsByPost : COMMENT SERVICE SERVER");
    CommentModel.findAllCommentsForPost(postId)
      .then(function(comments) {
        console.log(comments);
        res.json(comments);
      });
  }


};
