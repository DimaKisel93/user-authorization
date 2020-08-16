var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

// app.get("/test", function (req, res) {
//   var mysql = require("mysql");

//   var con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "1234",
//     database: "users",
//     port: 3307
//   });

//   console.log("Connection Object Created");
//   con.connect(function (error1) {
//     if (error1) {
//       console.log(error1);
//       return;
//     } else {
//       console.log("Connected1");
//     }
//   });
// });

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})