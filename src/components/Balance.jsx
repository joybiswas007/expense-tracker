import React from 'react';

export default function Balance({ transactions }) {
  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div>
      <h3>Balance</h3>
      <h1>{balance.toFixed(2)}</h1>
    </div>
  );
}
