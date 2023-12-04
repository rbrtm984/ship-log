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
app.use(express.static('dist')); // Serve your frontend

// Use the WakaTime routes defined in the 'routes' folder
app.use('/api', wakatimeRoutes);

// SQLite route for recording progress
app.post('/api/progress', (req, res)=>{
  const { userId, projectId, date, timeSpent } = req.body;
  const sql = `INSERT INTO progress(user_id, project_id, date, time_spent) VALUES (?, ?, ?, ?)`;

  db.run(sql, [userId, projectId, date, timeSpent], function(err){
    if (err) {
      console.error(err.message);
      res.status(500).send('Error saving progress');
      return;
    }
    res.status(201).json({ message: 'Progress saved successfully', id: this.lastID });
  })
})

// Route to fetch total time spent on each project per week
app.get('/api/progress/weekly', (req, res)=>{
  const sql = `SELECT project_id, strftime('%W', date) AS week, SUM(time_spent) AS total_time
                    FROM progress
                    GROUP BY project_id, week
                    ORDER BY week`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error fetching weekly progress');
      return;
    }
    res.status(200).json(rows);
  })
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