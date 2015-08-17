//require sequelize models
var models = require('./db/orm-model.js');
var User = models.User;
var Activity = models.Activity;
var sequelize = require('./db/database.js');

module.exports = {
  upsertUser : function(req, res) {
    'use strict';
    User.upsert({
      userId: req.body.user_id,
      email: req.body.email,
      picture: req.body.picture || req.body.gravatar,
      name: req.body.name,
      nickname:req.body.nickname});
    res.sendStatus(200);
  },

  addActivity : function(req, res){
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
},

retrieveActivityFeed: function(req, res){
  'use strict';

  //query for all activities for which the user is NOT an owner
  sequelize.query("select id, description, title, keywords, location, " +
    "(select picture from Users user where userId = activity.ownerIdUserId) " +
    "as avatar, (select name from Users user where userId = " +
    "activity.ownerIdUserId) as owner from Activities activity " +
    "where ownerIdUserId != '" + userID + "' and active = true",
    { type: sequelize.QueryTypes.SELECT}).then(function(results){
      res.send(results);
},

joinActivity : function(req, res){
  'use strict';
  User.find({where: {userId: req.body.user_id}})
    .then(function(user){
      Activity.find({where: {id: req.body.activity_id}})
      .then(function(activity){
        user.addActivity(activity);
      });
    });
  res.redirect('/');
},

leaveActivity:  function(req, res){
  'use strict';
  User.find({where: {userId: req.body.user_id}})
    .then(function(user){
      Activity.find({where: {id: req.body.activity_id}})
      .then(function(activity){
        user.removeActivity(activity);
      });
    });
  res.redirect('/');
},

ownerActivities : function(req, res){
  'use strict';
  Activity.findAll({
    where: {
      //diferentiate between owner and just belonging to activity
      ownerIdUserId : req.query.user_id,
      active: true
    }
  }).then(function(ownedActivities){
    
    res.send(ownedActivities);
  });
},

participatingActivities : function(req, res){
  'use strict';
  User.find({
    where: { 
      userId: req.query.user_id
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
},

closedActivities : function(req, res){
   'use strict';
  Activity.findAll({
    where: {
      ownerIdUserId : req.query.user_id,
      active : false
    }
  }).then(function(ownedActivities){
    res.send(ownedActivities);
  });
},

 toggleActivityStatus : function(req, res){
  'use strict';
  Activity.find({
    where: {
      id: req.body.activity_id
    }
  })
  .then(function(activity){
    activity.updateAttributes({active: !activity.get('active')});
  });
  res.redirect('/');
}
}