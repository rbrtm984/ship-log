const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
// const { Project } = require('./models/Project.js')

const wakatimeRoutes = require('./routes/api');

// Database connection logic 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.sqlite', (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('Connected to the SQLite database.');
})

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON payloads from incoming requests
app.use(express.json());

// Serve the static frontend files from the 'client/dist' directory
app.use(express.static('client/dist')); // Serve your frontend

// Use the WakaTime routes defined in the 'routes' folder
app.use('/api', wakatimeRoutes);

// Endpoint to create a new project in the database
app.post('/api/projects', (req, res) => {
  const { projectName, hoursLogged, minutesLogged } = req.body;

  // Create a new Project instance based on the request body
  const newProject = new Project({
    projectName,
    hoursLogged,
    minutesLogged
    //other stuff
  })

  // Save the new project to the database
  newProject.save()
    .then(project => res.status(201).json({ message: 'Project created successfully!', project}))
    .catch(error => {
      console.error('Error saving project:', error);
      res.status(500).json({ message: 'Internal Server Error during POST request' })
    })
})

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error during GET request" });
  }
})

app.put('/api/projects/:id', async (req, res) => {
  try {
    console.log('req.body', req.body);
    const { id } = req.params;
    console.log('id', id);
    const name = req.body.name;
    const hours = req.body.hours;
    const minutes = req.body.minutes;
    const { projectName, hoursLogged, minutesLogged } = req.body;
    console.log('projectName', name, 'hoursLogged', hours, 'minutesLogged', minutes);
    const updatedProject = await Project.findOneAndUpdate(
      { _id: id},
      {
        $set: {
          projectName: name, 
          hoursLogged: hours,
          minutesLogged: minutes
        }
      },
      { new: true }
    );
    console.log('updatedProject', updatedProject)
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error during UPDATE request"})
  }
})

// create a route to delete a project
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findOneAndDelete({ _id: id });
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(deletedProject);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error during DELETE request"})
  }
})

// Middleware to handle 404 errors for undefined routes
app.use((req, res) => res.status(404).send('That endpoint doesnt exist'));

// Error handling middleware to catch any errors thrown in preceding middleware/functions
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
});

module.exports = app;