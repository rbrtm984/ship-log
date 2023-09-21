import React, { useState, useEffect } from 'react';
import DataForm from './DataForm'
import DataDisplay from './DataDisplay'
const fetch = require('node-fetch');

function Data() {
    // State variable to store project name from user input
    const [projectName, setProjectName] = useState(' ');

    // State variable to store fetched data from WakaTime API
    const [data, setData] = useState(null);

    // Asynchronous function to fetch project data from WakaTime API
    const fetchData = async() => {
      try {
        console.log('in fetchData function')

        // Fetching data from the server endpoint which connects to WakaTime
        const response = await fetch(`http://localhost:3000/api/wakatime?projectName=${projectName}`);
        const fetchedData = await response.json();

        // Updating the data state with fetched data
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching WakaTime data:", error);
      }
    }

    // Function called upon button click in DataForm component
    const handleClick = async () => {
      console.log('here i go handling that click')
      fetchData();
  }

    return (
      <div>
        <DataForm handleClick={handleClick} projectName={projectName} setProjectName={setProjectName}/>
        <DataDisplay data={data} />
      </div>
    );
  }

  export default Data;