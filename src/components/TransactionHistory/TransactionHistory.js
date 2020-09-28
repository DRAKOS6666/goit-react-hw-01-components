import React from 'react';
import PropTypes, { object } from 'prop-types';
import './TransactionHistory.scss';
import TableRow from './TableRow';

function TransactionHistory(props) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TableRow items={props.items}></TableRow>
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
};

export default TransactionHistory;
