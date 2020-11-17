import React from 'react';
import { render, screen, cleanup, waitForElement } from '@testing-library/react';
import AllCurrencies from '../../Pages/AllCurrencies/AllCurrencies';

afterEach(cleanup);

test('renders All Currencies text', () => {
  render(<AllCurrencies />);
  const textElement = screen.getByText(/All Currencies/i);
  expect(textElement).toBeInTheDocument();
});

