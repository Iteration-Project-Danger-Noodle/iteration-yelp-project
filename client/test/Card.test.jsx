import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Card from '../components/Card.jsx';
import { BrowserRouter } from 'react-router-dom'

describe('Card exists', () => {
  it('render the Card Component', () => {
    const { getByTestId } = render(<Card
        key={1}
        name={'Five Guys'}
        location={['1234 any st', '90210 beverly hills']}
        closes={false}
        price={'$$'}
        picUrl={'http://www.notanimage.com/pic.jpg'} />,
        { wrapper: BrowserRouter });
    const cardComponent = getByTestId('card-element')
    expect(cardComponent).toBeInTheDocument()
  });
});

describe('Card tests', () => {
    it('should display Open when closes = false', () => {
        const closedText = 'Open'
        const { getByText } = render(<Card
            key={1}
            name={'Five Guys'}
            location={['1234 any st', '90210 beverly hills']}
            closes={false}
            price={'$$'}
            picUrl={'http://www.notanimage.com/pic.jpg'} />,
            { wrapper: BrowserRouter });
        const closedElement = getByText(closedText);
        expect(closedElement).toBeInTheDocument()
    });

    it('should display Closed when closes = true', () => {
        const closedText = 'Closed'
        const { getByText } = render(<Card
            key={1}
            name={'Five Guys'}
            location={['1234 any st', '90210 beverly hills']}
            closes={true}
            price={'$$'}
            picUrl={'http://www.notanimage.com/pic.jpg'} />,
            { wrapper: BrowserRouter });
        const closedElement = getByText(closedText);
        expect(closedElement).toBeInTheDocument()
    });
});