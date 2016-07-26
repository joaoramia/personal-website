var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(Number(process.env.PORT), function () {
  console.log('App listening on port 3030!');
});