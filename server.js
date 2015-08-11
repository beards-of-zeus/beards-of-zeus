var app = require('./server/server-config.js');
var models = require('./server/db/orm-model.js');

var models = models();
var User = models.User;
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());


app.set('port', process.env.PORT || 4568);
app.listen(app.get('port'));

//will replace this with db
var storage = {};

app.post('/', function(req, res) {
    storage[req.body.user_id] = req.body;
    console.log(storage);
    //User.findOrCreate({where: {userId: req.body.user_id.slice(7)})
    User.upsert({
      userId: req.body.user_id.slice(7), 
      email: req.body.email,
      picture: req.body.picture,
      name: req.body.name,
      nickname:req.body.nickname});
    res.sendStatus(200);
});

app.get('/', function(req, res){
  console.log(storage);
  res.sendStatus(200);
});
console.log('Server listening on port ', app.get('port'));