import React from 'react';

function TableRow(props) {
  return props.items.map(prop => (
    <tr key={prop.id}>
      <th>{prop.type}</th>
      <th>{prop.amount}</th>
      <th>{prop.currency}</th>
    </tr>
  ));
}

export default TableRow;
