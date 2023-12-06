import React, { useState, useEffect } from 'react';
import DataForm from './DataForm'
import DataDisplay from './DataDisplay'
// import project list component
// import ProjectList from './ProjectList'
// import '../../styles/Data.css';
// import '../../styles/global.css';
const fetch = require('node-fetch');

function Data() {
    // State variable to store project name from user input
    const [projectName, setProjectName] = useState('');

    // State variable to store fetched data from WakaTime API
    const [data, setData] = useState(null);

    // State variable to display fetched data from WakaTime API
    const [projects, setProjects] = useState([]);

    // Asynchronous function to fetch project data from WakaTime API
    const fetchData = async() => {
      try {
        // Fetching data from the server endpoint which connects to WakaTime
        const response = await fetch(`http://localhost:3000/api/wakatime?projectName=${projectName}`);
        const fetchedData = await response.json();

        // Updating the data state with fetched data
       setData(fetchedData);
       return fetchedData;
      } catch (error) {
        console.error("Error fetching WakaTime data:", error);
      }
    }

    // Fucntion for handling get request to database to display projects
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects');
        const fetchedProjects = await response.json();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Fucntion for handling get request to check projects
    const checkProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects');
        const fetchedProjects = await response.json();
        return fetchedProjects;
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Function called upon button click in DataForm component
    const handleClick = async (e) => {
      let projectUpdated = false;
      e.preventDefault();
      const fetchedData = await fetchData();
      const check = await checkProjects();

      // iterate thru all extant projects in collection
      for(let i = 0; i < check.length; i++) {
        if(check[i].projectName === fetchedData.name){
          const { _id } = check[i];
          const response = await fetch(`http://localhost:3000/api/projects/${_id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...fetchedData
            })
          })
          console.log('updated project in data base')
          projectUpdated = true;
          break;
        }
      }

      if (projectUpdated) {
        console.log('updating them states')
        // fetchProjects();
      } else {
        try {
            console.log('no matches in database, posting new entry')
            const response = await fetch('http://localhost:3000/api/projects', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                projectName: projectName,
                hoursLogged: fetchedData.hours,
                minutesLogged: fetchedData.minutes
              }),
            });

          const responseData = await response.json();

          if(response.ok) {
            // Update the 'projects' state variable with the newly added project
            setProjects([...projects, {
              projectName: projectName,
              hoursLogged: fetchedData.hours,
              minutesLogged: fetchedData.minutes
            }]);
            console.log('Project data successfully added to the database!', responseData);
          } else {
            console.error('Failed to add project data to the database!', responseData);
          }
        } catch (error) {
          console.error('Error updating the database:', error);
        }
      } 
    }

    return (
      <section id="data-container">
        <DataForm handleClick={handleClick} projectName={projectName} setProjectName={setProjectName}/>
        <DataDisplay data={data} />
        {/* <ProjectList projects={projects} setProjects={setProjects} /> */}
      </section>
    );
  }

  export default Data;