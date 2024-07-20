// src/components/BarChart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 400)
      .attr('height', 100);

    svg.selectAll("*").remove(); // Clear previous render

    const margin = { top: 20, right: 20, bottom: 30, left: 20 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .domain([data.start_value, data.target_value])
      .range([0, width]);

    const progressGroup = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw the progress bar background
    progressGroup.append('rect')
      .attr('x', 0)
      .attr('y', height / 2 - 10)
      .attr('width', width)
      .attr('height', 20)
      .attr('fill', '#e0e0e0');

    // Draw the progress bar fill
    progressGroup.append('rect')
      .attr('x', 0)
      .attr('y', height / 2 - 10)
      .attr('width', x(data.current_value))
      .attr('height', 20)
      .attr('fill', '#8884d8');

    // Draw the current value indicator
    const currentX = x(data.current_value);

    progressGroup.append('polygon')
      .attr('points', `${currentX - 5},${height / 2 - 15} ${currentX + 5},${height / 2 - 15} ${currentX},${height / 2 - 5}`)
      .attr('fill', 'red');

    // Draw the current value label
    progressGroup.append('text')
      .attr('x', currentX)
      .attr('y', height / 2 - 20)
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text(data.current_value);
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default BarChart;