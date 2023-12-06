import React from 'react';
import LinePlot from './LinePlot'
// import '../../styles/Data.css';
// import '../../styles/global.css';

const DataDisplay = (props) => {
    // Temporary or dummy data for the line plot
  const dummyData = [2, 3, 2.5, 3.5, 4, 3.8, 2.9];
    return (
        <section className="data-display">
            <h1>Your time coding that project today:</h1>
            {/* Display the number of hours coded, if available, else show empty space */}
            <h2>Hours: {props.data ? JSON.stringify(props.data.hours) : ' '}</h2>
            {/* Display the number of minutes coded, if available, else show empty space */}
            <h2>Minutes: {props.data ? JSON.stringify(props.data.minutes) : ' '}</h2>
            {/* Render the LinePlot component with the dummy data if it exists */}
            {/* LINEPLOT IS CURRENTLY NOT FUNCTIONAL */}
            {/* {dummyData && <LinePlot data={dummyData} />} */}
        </section>
    );
}

export default DataDisplay;