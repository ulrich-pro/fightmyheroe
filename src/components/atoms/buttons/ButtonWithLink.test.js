import React from 'react';
import { render } from '@testing-library/react';
import Element from './ButtonWithLink';
import { BrowserRouter } from 'react-router-dom';

test('renders stared Heroe text', async () => {
  const App = () => (
    <BrowserRouter>
      <Element text="test button" to="/" />
    </BrowserRouter>
  );
  const { getByText } = render(<App />);
  const linkElement = getByText(/test button/i);
  expect(linkElement).toBeInTheDocument();
});
