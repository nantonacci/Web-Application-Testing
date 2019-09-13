import React, { useState } from 'react';

export function helpers(){
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [hit, setHit] = useState(0);
    const [foul, setFoul] = useState(0);


    if (ball === 4 || strike === 3 || hit){
        setBall(0)
        setStrike(0)
    }

    if (foul && strike <= 1){
        setStrike(strike + 1)
    }
    
}