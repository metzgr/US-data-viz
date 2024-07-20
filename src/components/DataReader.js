// src/components/DataReader.js
import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';

const DataReader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/metrics_dataPoints.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Extract the latest data point for the bar chart
  const latestData = data.length > 0 ? data[data.length - 1] : {};

  return (
    <div>
      <h1>Metric Updates Over Time</h1>
      {data.length > 0 && <LineChart data={data} />}

      <h1>Latest Current Value vs Target Value</h1>
      {Object.keys(latestData).length > 0 && <BarChart data={latestData} />}
    </div>
  );
};

export default DataReader;