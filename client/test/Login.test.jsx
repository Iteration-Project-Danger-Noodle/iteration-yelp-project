import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Login from '../components/Login.jsx';
import { BrowserRouter } from 'react-router-dom'

describe('Login should have correct labels for all inputs', () => {
    it('should contain label for username', () => {
        const labelText = 'username'
        const { getByLabelText } = render(<Login />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });

    it('should contain label for password', () => {
        const labelText = 'password'
        const { getByLabelText } = render(<Login />, {wrapper: BrowserRouter});
        const labelElement = getByLabelText(labelText);

        expect(labelElement).toBeInTheDocument();
    });
});
