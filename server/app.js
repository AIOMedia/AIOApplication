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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Start DB
var db = new dbManager();
db.connect();

// Declare routes
app.use('/', routes);
app.use('/user', users);

// Check which server user is used to execute Node code
if (process.getuid && process.setuid) {
    console.log('Current uid: ' + process.getuid());
}

module.exports = app;