// Load App dependencies (packages)
var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var bodyParser   = require('body-parser');

// Load App dependencies (local modules)
var dbManager = require('./Core/Services/DatabaseManager');

// Load configuration file
var config = require('./config');

// Load routes
var routes = require('./routes');
var users  = require('./User/routes');

// Initialize the App
var app = express();

// Configuration
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());

// Start DB
var db = new dbManager();
db.connect();

// Declare routes
app.use('/', routes);
app.use('/users', users);

// Check which server user is used to execute Node code
if (process.getuid && process.setuid) {
    console.log('Current uid: ' + process.getuid());
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stack trace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stack traces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;