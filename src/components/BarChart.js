// src/components/BarChart.js
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import '../styles/main.css'; // Ensure USWDS styles are applied

const BarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 600)
      .attr('height', 400);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 60)
      .attr('y', d => 400 - d.value)
      .attr('width', 50)
      .attr('height', d => d.value)
      .attr('class', 'usa-fill-primary'); // USWDS class for primary color
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default BarChart;
