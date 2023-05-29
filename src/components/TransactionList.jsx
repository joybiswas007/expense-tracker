import React from 'react';

export default function TransactionList({ transactions, deleteTransaction }) {
    return (
        <div className="transaction-list">
		   <h2>Transactions History</h2>
		   <ul>
		     {transactions.map(transaction => (
		       <li key={transaction.id}>
		         <span>{transaction.text}</span>
		         <span>{transaction.amount.toFixed(2)}</span>
		         <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
		       </li>
		     ))}
		   </ul>
		</div>
    );
}