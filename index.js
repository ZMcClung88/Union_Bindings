const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , http = require('http')
    , session = require('express-session')
    , config = require('./backend/config');

// const app = module.exports = express();
const app = module.exports = express();
const connString = 'postgres://postgres:@localhost/Union_Bindings';
const massiveInstance = massive.connectSync({connectionString: connString});

app.set('db', massiveInstance);
const db = app.get('db');
// const massiveInstance = massive.connectSync({connectionString: config.database_secret});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));




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
