import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from '../components/Navbar.jsx';

describe('Navbar tests', () => {
    it('should contains the heading 1', () => {
    render(<Navbar />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});