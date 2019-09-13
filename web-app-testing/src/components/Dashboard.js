// provide a button that the person in charge can press every time there is a strike, ball, foul, or hit
// there is no need to specify the type of hit
// changes recorded on this component should update the information shown by the Display component

import React, { useState } from 'react';

// import {incrementBall, incrementFoul, incrementHit, incrementStrike} from '../helpers/helpers.js';

const Dashboard = (props) => {

    console.log(props)

     function incrementBall(){
        props.setBall(props.ball + 1)
        if (props.ball === 4){
            props.setBall(0)
            props.setStrike(0)
        }
    }
    
     function incrementStrike(){
        props.setStrike(props.strike + 1)
        if (props.strike === 3){
            props.setStrike(0)
            props.setBall(0)
        }
    }

     function incrementHit(){
        props.setHit(props.hit + 1)
    }

     function incrementFoul(){
        props.setFoul(props.foul + 1)
        if (props.strike <= 1){
            props.setStrike(props.strike + 1)
        }
    }
    
    return(
        <div>
            <button onClick={incrementStrike}>Strike</button>
            <button onClick={incrementBall}>Ball</button>
            <button onClick={incrementFoul}>Foul</button>
            <button onClick={incrementHit}>Hit</button>
        </div>
    )
}

export default Dashboard;