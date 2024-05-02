import React, { useState } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import Search from './Search';
import { transactions as currentTransaction } from './Data'; // Import transactions as an object

//app
const App = () => {
  const [transactions, setTransactions] = useState(currentTransaction); // Access transactions from the imported data
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  
  };
  
  // Function to handle search 
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1 className="header">The Royal Bank of Flatiron</h1>
      <Search onSearch={handleSearch} />
      <TransactionForm onSubmit={addTransaction} setTransactions={setTransactions} transactions={transactions} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
