import React from 'react';

const DataForm = (props) => {
    return (
      <div>
        <input 
          // className='album_id' 
          required="required" 
          placeholder="Project name" 
          onChange={e => setId(e.target.value)}>  
        </input>
        <button type="submit" onClick={props.handleClick}>Get my project data!</button>
      </div>
    );
}

export default DataForm;