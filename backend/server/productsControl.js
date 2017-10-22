const app = require('../.././index.js')
    , db = app.get('db');

module.exports = {
  getProducts: (req, res) => {
    db.get_products((err, products) => {
      if(!err) {
        return res.status(200).send(products);
      } else {
        return res.send(err);
      }
    })
  }
}
