const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        instructor: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true

        },
        prerequisites:{
            type: Array,
            required:true

        },
        finished: {
            type: Boolean,
            default: false,
            required: true
        }
    }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;