import React, { useState } from 'react';
import Inputs from './Inputs';

export default function AddTransaction({ addTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);

    setText('');
    setAmount(0);
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text"> Additional message </label>
          <Inputs
            type="text"
            id="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount"> Amount </label>
          <Inputs
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
