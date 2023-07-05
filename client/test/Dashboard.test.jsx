import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from '../components/Dashboard.jsx';

describe('Dashboard tests', () => {
    it('should contains the heading 1', () => {
    render(<Dashboard />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});