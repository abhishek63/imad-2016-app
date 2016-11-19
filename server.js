
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var crypto = require('crypto');
var session = require('express-session');

//database library
var config = {
    
    user : 'abhishek63',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    database : 'abhishek63',
    password : process.env.DB_PASSWORD
    
};





var app = express();
app.use(morgan('combined'));

app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));

var pool = new Pool(config);

app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});









app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'register.html'));
});



app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
})



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
