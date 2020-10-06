import React from 'react';
import propTypes from 'prop-types';
import StatItem from './StatItem';
import './Statistics.scss';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(statItem => (
          <li
            className="item"
            key={statItem.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <StatItem statItem={statItem} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.shape({ id: propTypes.string.isRequired }))
    .isRequired,
};

Statistics.defaultProps = {
  title: '',
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
