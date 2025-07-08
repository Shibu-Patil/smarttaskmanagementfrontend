import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

const TaskStatsChart = ({ stats }) => {
  const chartRef = useRef(null);

  useEffect(() => {
     if (!stats) return;

  const { completedTasks = 0, pendingTasks = 0 } = stats;

  const data = [
    { label: 'Completed', value: completedTasks },
    { label: 'Pending', value: pendingTasks }
  ];

  const width = 220;
  const height = 220;
  const radius = Math.min(width, height) / 2;

  d3.select(chartRef.current).selectAll('*').remove();

  const svg = d3
    .select(chartRef.current)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.label))
    .range(['#16a34a', '#f97316']);

  const pie = d3.pie().value(d => d.value);
  const arc = d3.arc().innerRadius(60).outerRadius(radius);

  svg.selectAll('path')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('fill', d => color(d.data.label))
    .attr('stroke', '#fff')
    .style('stroke-width', '2px')
    .transition()
    .duration(1000)
    .attrTween('d', function(d) {
      const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function(t) {
        return arc(i(t));
      };
    });

  // Add text labels
  svg
    .selectAll('text')
    .data(pie(data))
    .enter()
    .append('text')
    .text(d => d.data.value)
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('dy', '0.35em')
    .style('text-anchor', 'middle')
    .style('font-size', '14px')
    .style('font-weight', '600')
    .style('fill', '#1f2937');

  }, [stats]);

  if (!stats) {
    return (
      <div className="p-6 rounded-2xl shadow-xl bg-white w-[300px] text-center text-gray-500">
        Loading stats...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="p-6 bg-white rounded-2xl shadow-xl w-[300px] flex flex-col items-center"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-4">Task Summary</h2>
      <div ref={chartRef} className="mb-4" />
      <div className="w-full space-y-1 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Total Users:</span>
          <span className="font-medium">{stats.totalUsers}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Tasks:</span>
          <span className="font-medium">{stats.totalTasks}</span>
        </div>
        <div className="flex justify-between">
          <span>Completed Tasks:</span>
          <span className="font-medium text-green-600">{stats.completedTasks}</span>
        </div>
        <div className="flex justify-between">
          <span>Pending Tasks:</span>
          <span className="font-medium text-orange-500">{stats.pendingTasks}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskStatsChart;
