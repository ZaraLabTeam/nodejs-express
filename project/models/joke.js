/**
 * Created by kidroca on 22.10.2016 г..
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JokeSchema = new Schema({
    content: {type: String, required: true},
    category: {type: String, required: true}
});

module.exports = mongoose.model('Joke', JokeSchema);