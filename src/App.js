// src/App.js
import React, { useState, useEffect } from 'react';
import OKRCard from './components/OKRCard'; // Correct path to OKRCard component
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
      <div className="card-container">
        {data.map(target => (
          <OKRCard key={target.id} target={target} />
        ))}
      </div>
    </div>
  );
};

export default App;