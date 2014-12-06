/**
 * Song
 *
 * @module Music
 * @
 */

var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

var SongSchema = Schema({
    trackNumber: Number,
    name: {
        type: String,
        require: true
    },
    duration: Number,
    score: Number
});

module.exports = mongoose.model('Song', SongSchema);