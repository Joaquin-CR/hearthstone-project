import HomeSreen from '@/app/components/HomeScreen/HomeSreen';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

const pushMock = jest.fn();

useRouter;
describe('HomeSreen', () => {
  it('should render the homepage', () => {
    jest.mock('next/router', () => ({
      useRouter: jest.fn(),
    }));
    render(<HomeSreen />); // ARRANGE
    const myElement = screen.getByText('Mage'); // ACT

    expect(myElement).toBeInTheDocument(); // ASSERT
  });

  //   it('should render the homepage', () => {
  //     jest.mock('next/router', () => ({
  //       useRouter: jest.fn(),
  //     }));
  //     render(<Home />); // ARRANGE
  //     const myElement = screen.getByText('Mage'); // ACT

  //     expect(myElement).toBeInTheDocument(); // ASSERT
  //   });
});
