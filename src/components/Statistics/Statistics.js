import React from 'react';
import propTypes from 'prop-types';
import StatItem from './StatItem/StatItem';
import getRandomColor from '../../utils/getRandomColor';
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

export default Statistics;
