import { render, screen } from '@testing-library/react';
import React from 'react';
import Signup from '../components/Signup.jsx';

describe('Signup tests', () => {
    it('should contains the heading 1', () => {
    render(<Signup />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});