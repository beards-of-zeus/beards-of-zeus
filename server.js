var app = require('./server/server-config.js');
var database = require('./server/db/orm-model.js');


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
    console.log('[req.body] :', req.body);   // [req.body] : undefined

    storage[req.body.user_id] = req.body;
    res.sendStatus(200);
});

app.get('/', function(req, res){
  console.log(storage);
  res.sendStatus(200);
});
console.log('Server listening on port ', app.get('port'));