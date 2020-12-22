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
        <p>Git testing</p>
      </div>
    </div>
  );
}

export default App;
