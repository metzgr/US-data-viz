// src/components/ProgressBarChart.js
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const ProgressBarChart = ({ data }) => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 400, height: 150 });

  useEffect(() => {
    const handleResize = () => {
      const width = ref.current ? ref.current.parentElement.clientWidth : 400;
      setDimensions({ width, height: 150 });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so the chart is sized correctly initially

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`)
      .attr('preserveAspectRatio', 'xMinYMin meet');

    svg.selectAll('*').remove();

    const margin = { top: 20, right: 0, bottom: 30, left: 0 }; // Reduced left and right margins to 0
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .domain([data.start_value, data.target_value])
      .range([0, width]);

    const progressGroup = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    progressGroup.append('rect')
      .attr('x', 0)
      .attr('y', height / 2 - 10)
      .attr('width', width)
      .attr('height', 20)
      .attr('fill', '#e0e0e0');

    const previousValue = data.progress && data.progress.length > 1 ? data.progress[data.progress.length - 2].value : data.start_value;

    progressGroup.append('rect')
      .attr('x', 0)
      .attr('y', height / 2 - 10)
      .attr('width', x(data.current_value))
      .attr('height', 20)
      .attr('fill', data.current_value >= previousValue ? '#0071bc' : '#d03f3f'); // blue for improvement, red for decline

    const currentX = x(data.current_value);

    progressGroup.append('polygon')
      .attr('points', `${currentX - 5},${height / 2 - 15} ${currentX + 5},${height / 2 - 15} ${currentX},${height / 2 - 5}`)
      .attr('fill', 'red');

    progressGroup.append('text')
      .attr('x', currentX)
      .attr('y', height / 2 - 20)
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text(data.current_value);

    progressGroup.append('text')
      .attr('x', 0)
      .attr('y', height / 2 + 30)
      .attr('text-anchor', 'start')
      .attr('fill', 'black')
      .text(data.start_value);

    progressGroup.append('text')
      .attr('x', width)
      .attr('y', height / 2 + 30)
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text(data.target_value);
  }, [data, dimensions]);

  return <svg ref={ref} className="chart-svg" style={{ width: '100%', height: '150px' }}></svg>;
};

export default ProgressBarChart;