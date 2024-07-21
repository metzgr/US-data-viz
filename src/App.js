import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OKRCard from './components/OKRCard';
import Prototype from './pages/Prototype';
import './styles/main.scss';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();
    const body = document.body;

    if (currentHour >= 19 || currentHour < 6) { // 7PM to 6AM
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }, []);

  const HomePage = () => (
    <div className="App">
      <h1 className="display-large-copernicus">OKR Dashboard</h1>
      <div className="grid-container-widescreen">
        <div className="grid-row">
          {data.map(target => (
            <div key={target.id} className="tablet:grid-col-4 metric-card">
              <OKRCard target={target} />
            </div>
          ))}
        </div>
      </div>
      <Link to="/prototype" className="usa-button">Go to Prototype Page</Link>
    </div>
  );

  return (
<Router basename="/US-data-viz">
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/prototype" element={<Prototype />} />
  </Routes>
</Router>
  );
};

export default App;