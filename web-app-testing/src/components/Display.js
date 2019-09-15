// display the count of balls and strikes for the at-bat
// should be updated when the user records activity on the Dashboard component

import React from 'react';

const Display = (props) => {
    return(
        <div>
            <div className="tracker"><span role="image" aria-label="heavy check mark">✔️</span> Hits: {props.hit}</div>
            <div className="tracker"><span role="image" aria-label="baseball">⚾</span> Ball: {props.ball}</div>
            <div className="tracker"><span role="image" aria-label="cross mark">❌</span> Strike: {props.strike}</div>
        </div>
    )
}

export default Display;