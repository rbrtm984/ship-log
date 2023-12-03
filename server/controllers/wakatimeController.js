const fetch = require('node-fetch');
// Wakatime API key
  // should be encrypted/stored in some way to avoid 
  // issues with commiting changes that contain it
const API_KEY = 'waka_086ada9f-8916-482e-b7cc-29f11015db4b';

// Encoding the API key in base64
const base64EncodedKey = Buffer.from(API_KEY).toString('base64');

// Endpoint URL for fetching user summaries for today
const ENDPOINT = 'https://wakatime.com/api/v1/users/current/summaries?start=today&end=today';

// Exporting the fetchData function
exports.fetchData = (req, res) => {

    // Use node-fetch to get data from the Wakatime API
    fetch(ENDPOINT, {
        headers: {
          // Adding authorization header with encoded API key
          'Authorization': `Basic ${base64EncodedKey}`
        }
      })
      .then(response => { 
        // Check if the response is successful
        if(!response.ok) {
            throw new Error('Network response was not ok!');
        }
        return response.json()
    })
      .then(data => {
        // Iterate through the returned project data
        for(let i = 0; i < data.data[0].projects.length; i++) {
            // If project name matches the queried project name, return the project data
            if(data.data[0].projects[i].name === req.query.projectName) {
                console.log('we did it')
                res.status(200).json(data.data [0].projects[i]);
            }
        }
    })
      .catch(error => {
        // Catch and log any errors occurred during fetch
        console.error('Error fetching WakaTime data:', error)
        res.status(500).json({ error: 'Failed to fetch WakaTime data' });
    });
}