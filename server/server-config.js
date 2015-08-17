var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var serverUtils = require('./serverUtils.js');

app.set('view engine', 'html');
app.use('/', express.static('./public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Insert or update user information in database
app.post('/data/user', serverUtils.upsertUser);

app.post('/data/activities', serverUtils.addActivity);

app.get('/data/activities', serverUtils.retrieveActivityFeed);

app.post('/data/join', serverUtils.joinActivity);

app.post('/data/leave', serverUtils.leaveActivity);

app.get('/data/userActivities', serverUtils.ownerActivities);

app.get('/data/participatingActivities', serverUtils.participatingActivities);

app.get('/data/closedActivities', serverUtils.closedActivities);

app.post('/data/toggle', serverUtils.toggleActivityStatus);

module.exports = app;