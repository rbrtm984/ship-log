// import React, { useState, useEffect } from 'react';
// import '../../styles/global.css';

// // this component will contain the list of projects
// // Path: client/src/components/ProjectList.jsx
// // ensure project list has access to projects updated by data.jsx


// function ProjectList({ projects, setProjects }) {

//     useEffect(() => {
//         fetchProjects();
//       }, []);

//     // Fucntion for handling get request to database to display projects
//     const fetchProjects = async () => {
//         try {
//           const response = await fetch('http://localhost:3000/api/projects');
//           const fetchedProjects = await response.json();
//           setProjects(fetchedProjects);
//         } catch (error) {
//           console.error("Error fetching projects:", error);
//         }
//       };

//     return (
//       <div id="project-list">
//         <h2>Your Projects:</h2>
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.projectName}</h3>
//             <p>Hours: {project.hoursLogged}</p>
//             <p>Minutes: {project.minutesLogged}</p>
//           </div>
//         ))}
//       </div>
//     )
// }

// export default ProjectList;