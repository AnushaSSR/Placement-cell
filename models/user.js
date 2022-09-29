const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  DOB: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  student: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],

  interview: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interview'
  }]
}, 

{
  timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;