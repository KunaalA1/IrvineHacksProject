const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppSchema = new Schema(
    {
        prof_name:{
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: true
        },
        research_topics:{
            type: String,
            required:true
        },
        finished:{
            type: Boolean,
            required: true
        },
        ucinetid:{
            type: String,
            required: true
        }
    }
);

const App = mongoose.model('Course', AppSchema);
module.exports = App;