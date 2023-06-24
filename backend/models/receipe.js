const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const ReceipeSchema = new Schema({
    title: String,
    description: String,
    ingredients: String,
    instructions: String,
    image: String,
})


module.exports = mongoose.model('Receipe', ReceipeSchema);