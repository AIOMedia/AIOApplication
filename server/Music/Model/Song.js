var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
    trackNumber: Number,
    name: String,
    duration: Number,
    score: Number
});

module.exports = mongoose.model('Song', SongSchema);