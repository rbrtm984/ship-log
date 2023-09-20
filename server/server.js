const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;
const API_KEY = 'waka_22add552-3237-46eb-82a8-3123add39032';
const base64EncodedKey = Buffer.from(API_KEY).toString('base64');
const ENDPOINT = 'https://wakatime.com/api/v1/users/current/summaries?start=today&end=today';

app.use(express.static('client/dist')); // Serve your frontend

app.get('/api/wakatime', (req, res) => {
    // send the user back some data as a json response
    fetch(ENDPOINT, {
        headers: {
          'Authorization': `Basic ${base64EncodedKey}`
        }
      })
      .then(response => { 
        if(!response.ok) {
            throw new Error('Network response was not ok!');
        }
        return response.json()
    })
      .then(data => {
        // send only data from inputted project
        // maybe access via req.params?
        res.json(data.data[0].projects)
    })
      .catch(error => {
        console.error('Error fetching WakaTime data:', error)
        res.status(500).json({ error: 'Failed to fetch WakaTime data' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});