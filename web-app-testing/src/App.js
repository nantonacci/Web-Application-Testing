import React, { useState } from 'react';

import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [hit, setHit] = useState(0);
    const [foul, setFoul] = useState(0);

  return (
    <div className="App">
      <h1><span role="image" aria-label="baseball">⚾</span> Score-Keeper</h1>
      <Display ball={ball} setBall={setBall} strike={strike} setStrike={setStrike} hit={hit} setHit={setHit} foul={foul} setFoul={setFoul} />
      <Dashboard ball={ball} setBall={setBall} strike={strike} setStrike={setStrike} hit={hit} setHit={setHit} foul={foul} setFoul={setFoul} />
    </div>
  );
}

export default App;
