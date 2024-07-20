// src/components/OKRCard.js
import React from 'react';
import ProgressBarChart from './ProgressBarChart';
import SparklineChart from './SparklineChart';

const OKRCard = ({ target }) => {
  const progressData = {
    start_value: target.start_value,
    current_value: target.current_value,
    target_value: target.target_value,
    progress: target.progress
  };

  return (
    <div className="usa-card pgov-metric-card display-flex flex-column flex-justify-between height-full">
      <div className="usa-card__container display-flex flex-column flex-justify-between height-full">
        <div className="usa-card__header">
          <h3 className="usa-card__heading">{target.title}</h3>
        </div>
        <div className="usa-card__body">
          <p>{target.description}</p>
          <div className="usa-prose">
            <h4>Progress</h4>
            <ProgressBarChart data={progressData} />
          </div>
          <div className="usa-prose">
            <h4>Indicator Over Time</h4>
            <SparklineChart data={target.progress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OKRCard;