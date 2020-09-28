import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './StatsList';
import './Statistics.scss';

function Statistics(props) {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}

      <ul className="stat-list">
        <StatsList stats={props.stats}></StatsList>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
