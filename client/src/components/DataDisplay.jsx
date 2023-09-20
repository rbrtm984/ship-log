import React from 'react';

const DataDisplay = (props) => {

    return (
        <div>
          {props.data ? JSON.stringify(props.data) : ' '}
        </div>
    );
}

export default DataDisplay;