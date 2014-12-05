var mongoose = require('mongoose');
var songSchema = require('./Song');

var AlbumSchema = new mongoose.Schema({
    name: String,
    songs: [ songSchema ]
});

module.exports = mongoose.model('Album', AlbumSchema);