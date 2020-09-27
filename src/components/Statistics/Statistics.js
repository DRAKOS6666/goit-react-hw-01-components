import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.scss';

function Statistics(props) {
  const statsList = props.stats.map(status => (
    <li
      className="item"
      key={status.id}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className="label">{status.label}</span>
      <span className="percentage">{status.percentage}%</span>
    </li>
  ));
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}

      <ul className="stat-list">{statsList}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default Statistics;
