// display the count of balls and strikes for the at-bat
// should be updated when the user records activity on the Dashboard component

import React from 'react';

const Display = (props) => {
    return(
        <div>
            <div>Ball: {props.ball}</div>
            <div>Strike: {props.strike}</div>
        </div>
    )
}

export default Display;