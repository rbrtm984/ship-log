const mongoose = require('mongoose');
const fetch = require('node-fetch');

mongoose.connect(connectionString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to MongoDB Atlas!');
})
.catch(error => {
    console.error('Connection error:', error);
});

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  hoursLogged: {
    type: Number,
    required: true
  },
  minutesLogged: {
    type: Number,
    required: true
  }
  // ... any other fields you need
});

const Project = mongoose.model('Project', projectSchema);

module.exports = {
    Project
}