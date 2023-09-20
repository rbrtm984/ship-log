import React, { useState, useEffect } from 'react';
import DataForm from './DataForm'
import DataDisplay from './DataDisplay'

function Data() {
    const [id, setId] = useState('')
    const [data, setData] = useState(null);

    const fetchData = async() => {
      try {
        const response = await fetch('/api/wakatime');
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching WakaTime data:", error);
      }
    }

    const handleClick = async () => {
      fetchData();
  }

    return (
      <div>
        <DataForm handleClick={handleClick}/>
        <DataDisplay data={data}/>
      </div>
    );
  }

  export default Data;