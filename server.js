var express = require('express');
var mongoose = require('mongoose');
var snippetModel = require('./models/Snippet');
var routes = require('./routes/index');
var compression = require('compression');
var bodyParser = require('body-parser');

var app = express();

// body parsing for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var oneDay = 86400000;
var path = require('path');

// db - NODE_ENV
// mongod --nojournal --noprealloc --dbpath=./voiceDB
switch (app.get('env')) {
    case 'openshift':
        mongoose.connect('mongodb://user:password@'+process.env.MONGODB_SERVICE_HOST+':'+process.env.MONGODB_SERVICE_PORT+'/voice');
        break;
    default:
        mongoose.connect('mongodb://localhost/voice');
        break;
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback () {
    console.log('db opened');
});

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// compress all requests
app.use(compression());

// serve up content and give it a default expiry
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.use('/', routes);

// preload database
snippetModel.createDefaultSnippets();

app.listen(process.env.PORT || 8080);
