import React, { useState } from 'react';

const TransactionForm = ({ setTransactions, transactions }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (!date ||category.trim() === ''||!description ||isNaN(parseFloat(amount))  ) {
      alert('Fill the form correctly');
      return;
    }

    // Add transaction to the transactions array
    const newTransaction = { date, description, category, amount };
    setTransactions([...transactions, newTransaction]);
  
    // Clear form fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

 


  return (
    <form onSubmit={handleSubmit}>
    <label>
      Date:
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </label>
    <label>
    Category:
    <input
      type="text"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      required
    />
  </label>
  <label>
    Description:
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
  </label>

  <label>

    Amount:
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      required
    />
  </label>
 

  <button type="submit">Add Transaction</button>
  
</form>
);
}

export default TransactionForm;
