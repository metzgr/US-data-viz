// src/App.js
import React, { useState, useEffect } from 'react';
import OKRCard from './components/OKRCard';
import './styles/main.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>OKR Dashboard</h1>
      <div className="grid-container-widescreen">
        <div className="grid-row">
          {data.map(target => (
            <div key={target.id} className="tablet:grid-col-4 metric-card">
              <OKRCard target={target} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;