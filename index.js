const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , config = require('./backend/config');

var connString = 'postgres://postgres:@localhost/Union_Bindings';
// const app = module.exports = express();
var app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.use(cors());

var db = massive.connect({connectionString : connString},
  function(err, localdb) {
    db = localdb;
    app.set('db', db);
  }
)
// app.set('db', massiveInstance);
// var db = app.get('db');
// const massiveInstance = massive.connectSync({connectionString: config.database_secret});






const port = 8080;    //80

// app.set('db', massiveInstance);
const productsControl = require('./backend/server/productsControl');

// PRODUCTS
app.get('/api/products', productsControl.getProducts);

//TEST////////////////////
app.get('/test', function(req, res) {
  res.status(200).json('test working');
})

app.listen(port, () => {
  console.log(`Ship docked on port ${port}`);
});
