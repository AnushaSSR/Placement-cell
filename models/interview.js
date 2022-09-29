const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});


const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;

