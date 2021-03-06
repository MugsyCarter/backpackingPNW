//model for the trip schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requiredString = {type: String, required: true};

//trip
const tripSchema = new Schema({
    name: requiredString,
    start: requiredString,
    end: requiredString,
    days: Number,
    mileage: Number,
    people: [],
    fun: Number,
    scenery: Number,
    difficulty: Number,
    overall: Number

});


module.exports = mongoose.model('Trip', tripSchema);