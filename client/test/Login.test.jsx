import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from '../components/Login.jsx';

describe('Login tests', () => {
    it('should contains the heading 1', () => {
    render(<Login />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});