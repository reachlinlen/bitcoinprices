import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders coin desk text', () => {
  render(<App />);
  const textElement = screen.getByText(/Coin Desk/i);
  expect(textElement).toBeInTheDocument();
});
