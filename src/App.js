import React from 'react';
import BarChart from './components/BarChart';
import './styles/main.css';

const data = [
  { value: 100 },
  { value: 200 },
  { value: 300 },
  { value: 400 },
  { value: 500 }
];

const App = () => {
  return (
    <div className="usa-grid">
      <h1 className="usa-heading">Data Visualization</h1>
      <BarChart data={data} />
    </div>
  );
};

export default App;

