module.exports = function(app) {

  var PostModel = require("../model/post/post.model.server");

  app.post("/api/user/:userId/post", createPost);
  app.get("/api/post/category/:categoryName", findArticlesByCategory);
  app.get("/api/user/:userId/post", findPostsByUser);
  app.get("/api/user/:userId/answer", findAnswersByUser);
  app.get("/api/user/:userId/question", findQuestionsByUser);
  app.get("/api/user/:userId/article", findArticlesByUser);
  app.get("/api/post/:postId", findPostById);
  // app.get("api/post/category/:categoryName", findArticlesByCategory);
  app.put("/api/post/:postId", updatePost);
  app.get("/api/post", findAllPosts);
  app.delete("/api/post/:postId", deletePost);


  function createPost(req, res) {
    var userId = req.params['userId'];
    var post = req.body;
    // console.log(trim(post.name));
    // if (trim(post.name) === "") {
    //   res.json(getPostByUser(userId));
    //   return;
    // }
    //post._id = (new Date()).getTime() + "";
    // console.log(post);
    PostModel
      .createPost(userId, post)
      .then (function (post) {
          console.log(post);
          PostModel
            .findAllPostsForUser(userId)
            .then(function (posts) {
              res.json(posts);
            });
        },
        function (err) {
          sendStatus(400).send("error when trying to create new post for user");
        });
    // WEBSITES.push(post);
    // res.json(getPostByUser(userId));
  }

  // first param in the parameters is request, the 2nd is respond (part of the Express)
  // req.query to parse queries
  function findPostsByUser(req, res) {
    var userId = req.params["userId"];
    console.log("hello from find post by user server");
    PostModel.findAllPostsForUser(userId)
      .then(function(posts) {
        res.json(posts);
      });
  }

  function deletePost(req, res) {
    var postId = req.params['postId'];
    PostModel.deletePost(postId)
      .then(function(post) {
        res.json(post);
      })

    // for(var i = 0; i < WEBSITES.length; i++) {
    //   if (WEBSITES[i]._id === postId) {
    //     WEBSITES.splice(i, 1);
    //   }
    // }
    // res.json(getPostByUser(userId));
  }

  function findPostById(req, res) {
    var postId = req.params['postId'];
    // console.log(postId);
    PostModel.findPostById(postId)
      .then(function(post) {
        res.json(post);
      })
    // for(var i = 0; i < WEBSITES.length; i++) {
    //   if (WEBSITES[i]._id === postId) {
    //     res.json(WEBSITES[i]);
    //     return;
    //   }
    // }
  }

  function updatePost(req, res) {
    var postId = req.params['postId'];
    //var userId = req.params["userId"];
    var newPost = req.body;
    PostModel.updatePost(postId, newPost)
      .then(function(posts) {
        res.json(posts);
      })
    // for(var i = 0; i < WEBSITES.length; i++) {
    //   if (WEBSITES[i]._id === postId) {
    //     WEBSITES[i] = newPost;
    //     res.json(getPostByUser(userId));
    //     return;
    //   }
    // }
  }

  function findAnswersByUser(req, res) {
    var userId = req.params["userId"];
    // console.log("hello from fwbu");
    PostModel.findTypesForUser(userId, "Answer")
      .then(function(posts) {
        res.json(posts);
      });
  }

  function findArticlesByUser(req, res) {
    var userId = req.params["userId"];
    // console.log("hello from fwbu");
    PostModel.findTypesForUser(userId, "Article")
      .then(function(posts) {
        res.json(posts);
      });
  }

  function findQuestionsByUser(req, res) {
    var userId = req.params["userId"];
    // console.log("hello from fwbu");
    PostModel.findTypesForUser(userId, "Question")
      .then(function(posts) {
        res.json(posts);
      });
  }

  function findArticlesByCategory(req, res) {
    var category = req.params["categoryName"];
    console.log("cate: ", category);
    PostModel.findArticlesByCategory(category)
      .then(function (posts) {
        res.json(posts);
      });
  }

  function findAllPosts(req, res) {
    console.log("findallposts from service");
    PostModel.findAllPosts()
      .then(function (posts) {
        res.json(posts);
      });
  }

};
