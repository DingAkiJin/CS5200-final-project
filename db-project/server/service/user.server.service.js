module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var passport = require("passport");
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require("bcrypt-nodejs");

  passport.use(new LocalStrategy(localStrategy)); // tell LocalStrategy() which function to use
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/loggedIn", loggedIn);
  app.post("/api/register", register);
  app.get("/api/user", findUserByName);
  app.get("/api/user/:uid", findUserById);
  app.put("/api/updateUser/:uid", updateUser);
  app.put("/api/subscribe", subscribeUser);
  app.put("/api/unsubscribe", unsubscribeUser);
  app.put("/api/professional", professionalUser);
  app.post('/api/logout', logout);
  app.get('/api/admin/user', checkIsAdmin, findAllUsers);
  app.get('/api/admin/isAdmin', isAdmin);
  app.put("/api/project/user/:userId/unfollows/:username", unfollowUser);
  app.put("/api/project/user/follows/:userId", followUser);
  app.delete("/api/admin/user/:uid", deleteUser);

  function followUser(req, res) {
    var id = req.params.userId;
    var follows = req.body;

    userModel
      .followUser(id, follows)
      .then(function(status){
        res.send(status);
      });
  }

  function unfollowUser(req, res) {
    var id = req.params.userId;
    var username = req.params.username;

    console.log(id +" "+username);

    userModel
      .unfollowUser(id, username)
      .then(function(user) {
          res.json(user);
        });
  }
  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  //passport will put user inside the req body
  function login(req, res) {
    // console.log(req.user);
    res.json(req.user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    // userModel.createUser(user)
    //   .then(function (user) {
    //     res.json(user);
    //   })
    //console.log(user.username);
    userModel
      .findUserByUsername(user.username)
      .then(function (data) {
        if(data){
          console.log("find user");
          res.status(400).send('Username is in use!');
          return;
        } else{
          console.log("did not find user");
          userModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  console.log("create user");
                  res.json(user);
                }
              }
            );
        }
      })

  }

  function findUserByName(req, res) {
    const username = req.query["username"];
    console.log(username);
    userModel.findUserByUsername(username)
      .then(function(user) {
        res.json(user);
      })
  }

  function findUserById(req, res) {
    const userId = req.params["uid"];
    userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      })
  }

  function updateUser(req, res) {
    var userId = req.params.uid;
    var user = req.body;

    console.log('server side', userId, user);

    userModel
      .updateUser(userId, user)
      .then(function (stats) {
          res.json(stats);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }

  function subscribeUser(req, res) {
    var user = req.body;
    var userId = user._id;
    console.log(userId);
    userModel
      .subscribeUser(userId)
      .then(function (stats) {
        res.json(stats);
      },
        function (error) {
          res.statusCode(404).send(error);
        })
  }

  function unsubscribeUser(req, res) {
    var user = req.body;
    var userId = user._id;
    console.log(userId);
    userModel
      .unsubscribeUser(userId)
      .then(function (stats) {
          res.json(stats);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }

  function professionalUser(req, res) {
    var user = req.body;
    var userId = user._id;
    userModel
      .professionalUser(userId)
      .then(function (stats) {
          res.json(stats);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }


  function findAllUsers(req, res) {
    userModel
      .findAllUsers()
      .then(function (users) {
        res.json(users);
      });
  }

  function isAdmin(req, res) {
    if(req.isAuthenticated() && req.user.roles.indexOf("Admin") > -1) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function checkIsAdmin(req, res, next) {
    if(req.isAuthenticated() && req.user.roles.indexOf("Admin") > -1) {
      next();
    } else {
      res.send(401);
    }
  }

  function deleteUser(req, res) {
    var userId = req.params["uid"];
    userModel.deleteUser(userId)
      .then(function (status) {
        res.send(status);
      })
  }

};
