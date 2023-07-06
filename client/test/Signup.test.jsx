import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Signup from '../components/Signup.jsx';

describe('Signup should have correct labels for all inputs', () => {
    it('should contain label for firstname', () => {
        const labelText = 'firstname'
        const { getByLabelText } = render(<Signup />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });

    it('should contain label for lastname', () => {
        const labelText = 'lastname'
        const { getByLabelText } = render(<Signup />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });

    it('should contain label for username', () => {
        const labelText = 'username'
        const { getByLabelText } = render(<Signup />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });

    it('should contain label for password', () => {
        const labelText = 'password'
        const { getByLabelText } = render(<Signup />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });

    it('should contain label for zipcode', () => {
        const labelText = 'zipcode'
        const { getByLabelText } = render(<Signup />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });
});