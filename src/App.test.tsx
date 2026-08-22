import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about me link in navbar', () => {
  render(<App />);
  const aboutMeLinks = screen.getAllByText(/About Me/i);
  expect(aboutMeLinks.length).toBeGreaterThan(0);
});
