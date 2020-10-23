import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders stared Heroe text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/stared Heroe/i);
  expect(linkElement).toBeInTheDocument();
});
