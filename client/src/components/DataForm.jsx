import React, { useState, useEffect } from 'react';
import '../../styles/DataForm.css';
import '../../styles/global.css';

const DataForm = (props) => {

    return (
      <form className="data-form">
        <h1>Project Name:</h1>
        {/* Input field for user to enter project name */}
        <input 
          id="projectName"
          required="required" // Makes sure user provides input
          placeholder="Enter the project name" 
          value={props.projectName} // Input's value is controlled via a prop
          // Update the state in parent component with every change in the input field
          onChange={e => props.setProjectName(e.target.value)}>
        </input>
        {/* Button to trigger the fetching of project data */}
        <button type="submit" onClick={(e) => props.handleClick(e)}>Get project data!</button>
      
      </form>
    );
}

export default DataForm;