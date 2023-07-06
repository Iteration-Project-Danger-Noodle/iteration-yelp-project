import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Dashboard from '../components/Dashboard.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard Exists', () => {
  it('render the Dashboard Component', () => {
    const { getByTestId } = render(<Dashboard />, {wrapper: BrowserRouter});
    const dashComponent = getByTestId('dash-element')
    expect(dashComponent).toBeInTheDocument()
  });
});