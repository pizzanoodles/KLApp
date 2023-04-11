const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
const LearningSchema = new Schema({
    title: String,
    body: String,
    rating: String,
    comments: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

//Model
const Learning = mongoose.model('Learning', LearningSchema);

module.exports = Learning;