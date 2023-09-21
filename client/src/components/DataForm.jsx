import React, { useState, useEffect } from 'react';

const DataForm = (props) => {

    return (
      <div>
        {/* Input field for user to enter project name */}
        <input 
          required="required" // Makes sure user provides input
          placeholder="Enter the project name" 
          value={props.projectName} // Input's value is controlled via a prop
          // Update the state in parent component with every change in the input field
          onChange={e => props.setProjectName(e.target.value)}>
        </input>
        {/* Button to trigger the fetching of project data */}
        <button type="submit" onClick={props.handleClick}>Get project data!</button>
      </div>
    );
}

export default DataForm;