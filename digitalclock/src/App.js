// Step 1: 'npm install -g create-react-app'
// Step 2: 'npx create-react-app digitalclock'
// Step 3: 'cd digitalclock'
// Step 4: Paste this code in digitalclock/src/App.js
// Step 5: Execute using 'npm start'
import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  const clockStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    fontFamily: 'Gill Sans',
    backgroundColor: '#333',
    color: '#fff',
  };

  const textStyles = {
    fontSize: '36px',
  };

  return (
    <div style={clockStyles}>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <p style={textStyles}>{formattedTime}</p>
      </div>
    </div>
  );
}

export default DigitalClock;
