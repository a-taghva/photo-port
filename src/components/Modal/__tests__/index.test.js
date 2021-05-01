import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockSetIsModalOpen = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  id: 1
};

describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal 
      setIsModalOpen={mockSetIsModalOpen}
      currentPhoto={currentPhoto}
    />)

    fireEvent.click(getByText('Close this modal'));

    expect(mockSetIsModalOpen).toHaveBeenCalledTimes(1);
  });
})