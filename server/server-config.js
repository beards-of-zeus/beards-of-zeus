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
    Activity.build({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      keywords: req.body.keywords,
      ownerIdUserId: req.body.user_id,
      active: true
    })
    .save();
  res.redirect('/');
});

app.get('/data/activities', function(req, res){
  'use strict';
  var iterations = 0;
  //query for all activities for which the user is NOT an owner
  Activity.findAll({
    where:{
      ownerIdUserId: {
        ne : req.query.userID
      }, 
      active: true
    }
  }).then(function(activities){
    //add each activity to a list
    activities.reduce(function(list, activity){
      //access the activity owner's information
      User.find({where: {userId: activity.ownerIdUserId}})
        .then(function(user){
          //push activity information to list
          list.push({id: activity.id, avatar: user.picture, 
            owner: user.name, description: activity.description, title: activity.title,
            keywords: activity.keywords, location: activity.location});
          iterations++;
          //once all activities have been added, send as response
          if(iterations === activities.length)
            { res.send(list); }
          });//function(user)
      return list;
    }, []);//reduce
  });//function(activities)
});//app.get

app.post('/data/join', function(req, res){
  'use strict';
  User.find({where: {userId: req.body.user_id}})
    .then(function(user){
      Activity.find({where: {id: req.body.activity_id}})
      .then(function(activity){
        user.addActivity(activity);
      });
    });
  res.redirect('/');
});

//tell the difference between owner vs. just belonging to activity;
//also show activity if owner in side-bar




app.get('/data/userActivities', function(req, res){
  'use strict';
  Activity.findAll({
    where: {
      ownerIdUserId : req.query.userID,
    }
  }).then(function(ownedActivities){
    
    res.send(ownedActivities);
  });
});//app.get

app.get('/data/participatingActivities', function(req, res){
  'use strict';
  User.find({
    where: { 
      userId: req.query.userID
    }
  }).then(function(user){
    user.getActivities({
      where : {
        active : true
      }
    })
    .then(function(activities){
      res.send(activities);
    });
  });
});//app.get

app.get('/data/closedActivities', function(req, res){
   'use strict';
  Activity.findAll({
    where: {
      ownerIdUserId : req.query.userID,
      active : false
    }
  }).then(function(ownedActivities){
    res.send(ownedActivities);
  });
});//app.get

app.post('/data/toggle', function(req, res){
  'use strict';
  Activity.find({
    where: {
      id: req.body.activityId
    }
  })
  .then(function(activity){
    activity.updateAttributes({active: !activity.get('active')});
  });
  res.sendStatus(200);
});
