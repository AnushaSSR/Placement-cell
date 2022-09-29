const mongoose = require('mongoose');
const env = require('./environment');
// provide connection to database

mongoose.connect(`mongodb://localhost/${env.db}`);
// mongoose.connect('mongodb+srv://awsCluster:awsPwd3#@cluster0.dludvsq.mongodb.net/codeial_development');
const db = mongoose.connection;

//comment error no need of correction
db.on('error', console.error.bind(console, "Error in connecting to MongoDB")); 


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');

});

module.exports = db;
