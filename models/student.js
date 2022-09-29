const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  college: {
    type: String,
    required: true

  },

  phoneNumber: {
    type:Number,
    required: true
  },
  batch: {
    type:String,
    required: true
  },
  status:{
    type: String,
    required: true,
    enum:['placed', 'not_placed']
  },
  score: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }

}, {
  timestamps: true
});



const Student = mongoose.model('Student', studentSchema);

module.exports = Employee;