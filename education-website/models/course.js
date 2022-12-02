const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{timestamps: true});

const Courses = mongoose.model('Courses',coursesSchema);
module.exports = Courses


