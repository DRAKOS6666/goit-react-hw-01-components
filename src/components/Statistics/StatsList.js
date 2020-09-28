import React from 'react';

function StatsList(props) {
  return props.stats.map(status => (
    <li
      className="item"
      key={status.id}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className="label">{status.label}</span>
      <span className="percentage">{status.percentage}%</span>
    </li>
  ));
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default StatsList;
