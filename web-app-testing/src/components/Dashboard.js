// provide a button that the person in charge can press every time there is a strike, ball, foul, or hit
// there is no need to specify the type of hit
// changes recorded on this component should update the information shown by the Display component

import React from 'react';

const Dashboard = () => {

    return(
        <div>
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
}

export default Dashboard;