import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about link in navbar', () => {
  render(<App />);
  const aboutLinks = screen.getAllByText(/About/i);
  expect(aboutLinks.length).toBeGreaterThan(0);
});
