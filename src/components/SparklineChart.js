// src/components/SparklineChart.js
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const SparklineChart = ({ data }) => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 400, height: 70 });

  useEffect(() => {
    const handleResize = () => {
      const width = ref.current ? ref.current.parentElement.clientWidth : 400;
      setDimensions({ width, height: 70 });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so the chart is sized correctly initially

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`)
      .attr('preserveAspectRatio', 'none') // Ensure the SVG fills the entire container
      .style('overflow', 'visible'); // Ensure overflow is visible to prevent clipping

    svg.selectAll('*').remove();

    const margin = { top: 10, right: 0, bottom: 10, left: 0 }; // Set left and right margins to 0
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.quarter))
      .range([0, width])
      .padding(0);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);

    const line = d3.line()
      .x(d => x(d.quarter) + x.bandwidth() / 2)
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    const lastDataPoint = data[data.length - 1];

    g.append('circle')
      .attr('cx', x(lastDataPoint.quarter) + x.bandwidth() / 2)
      .attr('cy', y(lastDataPoint.value))
      .attr('r', 4)
      .attr('fill', 'red');
  }, [data, dimensions]);

  return <svg ref={ref} className="chart-svg" style={{ width: '100%', height: '70px', display: 'block', padding: '0', margin: '0' }}></svg>;
};

export default SparklineChart;