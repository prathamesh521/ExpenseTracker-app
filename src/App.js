import React from 'react'
import './App.css';
import AddTransactions from './Components/AddTransactions';
import Main from './Components/Main';


function App() {
  return (
      <div className="container">
        <Main/>
        <AddTransactions />
      </div>
  );
}

export default App;
