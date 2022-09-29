const mongoose = require('mongoose');

const courseScoresSchema = new mongoose.Schema({
  score_dsa: {
    type: Number,
    required: true,
  },
  score_webd: {
    type: Number,
    required: true,
  },
  score_react: {
    type: Number,
    required: true,
  },
  
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Student'
  }

}, {
  timestamps: true
});


const CourseScores = mongoose.model('CourseScores', courseScoresSchema);

module.exports = CourseScores;