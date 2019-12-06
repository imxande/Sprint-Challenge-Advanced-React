import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(rtl.cleanup);

it('renders without crashing', () => {
  rtl.render(<App />)
});

it('the h1 text was found', () => {
  const h1 = rtl.render(<App />);
  expect(h1.getByText(/Soccer Players/i));
}); 