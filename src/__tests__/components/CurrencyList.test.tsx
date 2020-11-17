import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyList from '../../components/CurrencyList/CurrencyList';

test('renders currencies', () => {
  const fakeBitCoinPrices = {
    "USD": {
      code: "USD",
      symbol: "$",
      rate: "5.0",
      description: "US Dollars"
    },
    "EUR": {
      code: "EUR",
      symbol: "EUR",
      rate: "5.0",
      description: "EURO"
    }
  };
  render(<CurrencyList coinPrices={fakeBitCoinPrices} />);
  const currencies = screen.getAllByTestId('currency').map(li => li.textContent);
  const fakeCurrencies = Object.keys(fakeBitCoinPrices);
  expect(fakeCurrencies).toEqual(currencies);
});

test('renders errormsg', () => {
  render(<CurrencyList errorMsg="Requested resource is unavailable. Please revisit requested API" />);
  const textElement = screen.getByText(/Requested resource is unavailable. Please revisit requested API/i);
  expect(textElement).toBeInTheDocument();
})