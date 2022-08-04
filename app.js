var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('json spaces', 4)

app.post('/', function(req, res) {
    console.log(req);
    res.text('ok');
});

module.exports = app;
