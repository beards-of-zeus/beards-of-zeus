var express = require('express');

var app = express();

app.set('view engine', 'html');
app.use('/', express.static('./public'));

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

module.exports = app;

//require sequelize models
var models = require('./db/orm-model.js');
var models = models();
var User = models.User;
var Activity = models.Activity;

//Insert or update user information in database
app.post('/data/user', function(req, res) {
  'use strict';
  User.upsert({
    userId: req.body.user_id,
    email: req.body.email,
    picture: req.body.picture,
    name: req.body.name,
    nickname:req.body.nickname});
  res.sendStatus(200);
});

app.get('/data/user', function(req, res){
  'use strict';
  res.sendStatus(200);
});

app.post('/data/activities', function(req, res){
  'use strict';
  User.find({
    where: {
      userId : req.body.user_id
    }
  })
  .then(function(user){
    Activity.build({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      keywords: req.body.keywords
    })
    .save()
    .then(function(activity){
      if(user)
        user.addActivity(activity);
    });
  });
  res.redirect('/');
});

app.get('/data/activities', function(req, res){
  'use strict';
  Activity.findAll({})
  .then(function(err, data){
    res.send(200, data);
  });
});
