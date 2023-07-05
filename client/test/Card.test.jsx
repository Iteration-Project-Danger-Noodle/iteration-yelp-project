import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card.jsx';

describe('Card tests', () => {
    it('should contains the heading 1', () => {
    render(<Card />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});