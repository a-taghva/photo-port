import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..';

afterEach(cleanup);

const categoryName = 'protraits';

describe('Photo list is rendering...', () => {
  it('renders', () => {
    render(<PhotoList category={categoryName} />)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList category={categoryName} />);

    expect(asFragment()).toMatchSnapshot();
  });
})