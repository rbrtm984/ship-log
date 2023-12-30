import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument, getAllByRole } from '@testing-library/jest-dom'; // Add the import statement for toBeInTheDocument
import Hero from '../client/src/components/Hero';

describe('Hero', () => {
    // Import the extend-expect function

    test('renders navigation correctly', () => {
        const { getByText } = render(<Hero />);
        // Assert that navigation items are rendered correctly
        expect(getByText('GitHub')).toBeInTheDocument(); // Use toBeInTheDocument function
        expect(getByText('Team')).toBeInTheDocument(); // Use toBeInTheDocument function
        expect(getByText('Account')).toBeInTheDocument(); // Use toBeInTheDocument function
    });

    test('toggles menu on button click', () => {
        const { getByRole, getByText } = render(<Hero />);


        const menuButtons = getAllByRole('button', { name: /toggle menu/i });
        const menuButton = menuButtons[0]; // Select the desired menu button

        // Assert that menu is initially hidden
        expect(getByText('GitHub')).not.toBeVisible();
        expect(getByText('Team')).not.toBeVisible();
        expect(getByText('Account')).not.toBeVisible();

        // Click the menu button to toggle the menu
        fireEvent.click(menuButton);

        // Assert that menu is now visible
        expect(getByText('GitHub')).toBeVisible();
        expect(getByText('Team')).toBeVisible();
        expect(getByText('Account')).toBeVisible();

        // Click the menu button again to hide the menu
        fireEvent.click(menuButton);

        // Assert that menu is hidden again
        expect(getByText('GitHub')).not.toBeVisible();
        expect(getByText('Team')).not.toBeVisible();
        expect(getByText('Account')).not.toBeVisible();
    });

    test('renders brand logo correctly', () => {
        const { getByAltText } = render(<Hero />);

        // Assert that brand logo is rendered correctly
        expect(getByAltText('ship log logo')).toBeInTheDocument();
    });

    test('renders section content correctly', () => {
        const { getByText } = render(<Hero />);

        // Assert that section content is rendered correctly
        expect(getByText('Ship Log:')).toBeInTheDocument();
        expect(
            getByText(
                '(noun) an official record of events during a particular period of time, especially a journey on a ship or plane'
            )
        ).toBeInTheDocument();
    });
});