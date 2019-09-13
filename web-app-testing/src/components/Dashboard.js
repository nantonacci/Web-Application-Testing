// provide a button that the person in charge can press every time there is a strike, ball, foul, or hit
// there is no need to specify the type of hit
// changes recorded on this component should update the information shown by the Display component

import React, { useState } from 'react';

import helpers from '../helpers/helpers.js';

const Dashboard = () => {


    return(
        <div>
            <button onClick={helpers}>Strike</button>
            <button onClick={helpers}>Ball</button>
            <button onClick={helpers}>Foul</button>
            <button onClick={helpers}>Hit</button>
        </div>
    )
}

export default Dashboard;