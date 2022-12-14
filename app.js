var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('json spaces', 4)

var calls = [];

app.get('/', function(req, res) {
    res.json(calls);
})

app.post('/', function(req, res) {
    calls.push(req.headers['x-forwarded-for']);
    res.json({});
});

module.exports = app;
