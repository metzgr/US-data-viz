// src/components/OKRCard.js
import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';

const OKRCard = ({ target }) => {
  const progressData = {
    start_value: target.start_value,
    current_value: target.current_value,
    target_value: target.target_value
  };

  return (
    <div className="okr-card">
      <h3>{target.title}</h3>
      <p>{target.description}</p>
      <div>
        <h4>Progress</h4>
        <BarChart data={progressData} />
      </div>
      <div>
        <h4>Indicator Over Time</h4>
        <LineChart data={target.progress} />
      </div>
    </div>
  );
};

export default OKRCard;