import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import App from '../components/App.jsx';
import { BrowserRouter } from 'react-router-dom'

describe('App Exists', () => {
  it('render the App Component', () => {
    const { getByTestId } = render(<App />, {wrapper: BrowserRouter});
    const appComponent = getByTestId('app-element')
    expect(appComponent).toBeInTheDocument()
  });
});