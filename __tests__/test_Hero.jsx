import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../client/src/components/Hero';
// import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom/extend-expect';

describe('Hero component', () => {
  test('renders logo image', () => {
    render(<Hero />);
    const logoImages = screen.queryAllByAltText('ship log logo');
    expect(logoImages).toHaveLength(2);
  });

  test('renders navigation links', () => {
    render(<Hero />);
    const navigationLinks = screen.getAllByRole('link');
    expect(navigationLinks).toHaveLength(5);
  });

  test('toggles menu state on button click', () => {
    render(<Hero />);
    const menuButtons = screen.queryAllByLabelText('Toggle Menu');
    expect(menuButtons).toHaveLength(2);

    // Menu state should be null initially
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument();

    // Click the menu button to toggle the menu state
    menuButtons[0].click();

    // Menu state should be true after clicking the button
    expect(screen.queryByText('GitHub')).toBeInTheDocument();
  });
});