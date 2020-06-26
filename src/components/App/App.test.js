import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Card component', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('card');
  expect(linkElement).toBeInTheDocument();
});
