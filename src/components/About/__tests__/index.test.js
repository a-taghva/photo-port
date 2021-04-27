import React from 'react';
// render: (render component)Jest creates a simulated DOM in Node.js env
// cleanup: remove componenets from DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// global function from Jest
// after each test, we won't have any leftover memory data
afterEach(cleanup);

describe('About componenet', () => {
  // it function: first argument, a string declares what is being tested
  // second argument, a callback function runs the test
  it('render', () => {
    render(<About/>);
  });
})