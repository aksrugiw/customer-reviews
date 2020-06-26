import React from 'react';
import { render } from '@testing-library/react';
import StarBar from './StarBar';

test('renders five Star components as background', () => {
  const { getAllByTestId } = render(<StarBar />);
  const stars = getAllByTestId('star');

  expect(stars.length).toBe(5);
});

test('renders five background Star and 3 filled', () => {
  const { getAllByTestId } = render(<StarBar points={3} />);
  const stars = getAllByTestId('star');

  expect(stars.length).toBe(5 + 3);
});
