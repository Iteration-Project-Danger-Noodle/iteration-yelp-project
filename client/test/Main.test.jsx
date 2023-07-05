import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from '../components/Main.jsx';

describe('Main tests', () => {
    it('should contains the heading 1', () => {
    render(<Main />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});