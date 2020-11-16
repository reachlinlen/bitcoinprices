import React from 'react';
import './App.css';
import BitCoinPrices from './Pages/BitCoinPrices/BitCoinPrices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coin Desk</h1>
      </header>
      <div className="layout">
        <BitCoinPrices />
      </div>
    </div>
  );
}

export default App;
