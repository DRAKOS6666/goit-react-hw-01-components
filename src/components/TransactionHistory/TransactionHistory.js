import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.scss';

function TransactionHistory(props) {
  const tableRow = props.items.map(prop => {
    return (
      <tr key={prop.id}>
        <th>{prop.type}</th>
        <th>{prop.amount}</th>
        <th>{prop.currency}</th>
      </tr>
    );
  });

  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{tableRow}</tbody>
    </table>
  );
}

export default TransactionHistory;
