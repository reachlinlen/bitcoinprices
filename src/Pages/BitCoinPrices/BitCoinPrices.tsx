import React from 'react';
import AllCurrencies from '../AllCurrencies/AllCurrencies';

function BitCoinPrices() {
  return (
    <div>
      <h1>BitCoin Price Index</h1>
      <div className="currLayout">
        <AllCurrencies />
      </div>
    </div>
  )
}

export default BitCoinPrices;