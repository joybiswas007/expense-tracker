import React from 'react';

export default function IncomeExpense({ transactions }) {

    const income = transactions.filter((transaction) => transaction.amount > 0)
        .reduce((total, transaction) => total + transaction.amount, 0);

    const expense = transactions.filter((transaction) => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div>
		  <div>
		    <h3>Income</h3>
		    <p>{income.toFixed(2)}</p>
		  </div>
		  <div>
		    <h3>Expense</h3>
		    <p>{Math.abs(expense).toFixed(2)}</p>
		  </div>
		</div>
    );
}