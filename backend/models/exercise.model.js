const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, default: true },
    duration: { type: Number, default: null },
    date: { type: Date, default: null  },
    slug: { type: String }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;