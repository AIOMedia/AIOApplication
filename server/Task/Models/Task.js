var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name        : String,
    description : String,
    dateDue     : Date,
    done        : Boolean
});

module.exports = mongoose.model('Task', TaskSchema);