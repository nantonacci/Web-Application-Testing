// display the count of balls and strikes for the at-bat
// should be updated when the user records activity on the Dashboard component

import React from 'react';

const Display = () => {
    return(
        <div>
            <div>{ball}</div>
            <div>{strike}</div>
        </div>
    )
}

export default Display;