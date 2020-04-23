import React from 'react';
import Box from './Box';
import { render } from '@testing-library/react'

// Smoke Test!
it("renders without crashing", function() {
  render(<Box />);
});

//Snapshot Test
it("should match snapshot", function() {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

