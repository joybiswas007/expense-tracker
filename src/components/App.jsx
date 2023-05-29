import React, { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Footer from './Footer';

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
      <Footer />
    </div>
  );
}
