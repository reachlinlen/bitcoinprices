import React from 'react';
import { render, screen } from '@testing-library/react';
import BitCoinPrices from '../../Pages/BitCoinPrices/BitCoinPrices';

test('renders BitCoin Price Index text', () => {
  render(<BitCoinPrices />);
  const textElement = screen.getByText(/BitCoin Price Index/i);
  expect(textElement).toBeInTheDocument();
});