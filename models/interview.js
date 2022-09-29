const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    
    //list of array  to get the student data , mapping to set the status of the interview attended
    studentsList: [
        {
            student: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            },
            held_on_date: {
                type: Date,
                required: true
            },
            results: {
                type: String,
                required: true,
                enum: [PASS, FAIL, ON_HOLD, DIDNT_ATTEMPT]
            }
        },

    ],

}, {
    timestamps: true
});


const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;

