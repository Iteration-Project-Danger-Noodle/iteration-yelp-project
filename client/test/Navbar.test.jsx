import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';

describe('Navbar Exists', () => {
  it('render the Navbar Component', () => {
    const { getByTestId } = render(<Navbar />, {wrapper: BrowserRouter});
    const navbarComponent = getByTestId('nav-element')
    expect(navbarComponent).toBeInTheDocument()
  });
});

describe('Navbar should have correct labels for all inputs', () => {
    it('should contain label for preference', () => {
        const labelText = 'preference'
        const { getByLabelText } = render(<Navbar />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });

    it('should contain label for location', () => {
        const labelText = 'location'
        const { getByLabelText } = render(<Navbar />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });
});
