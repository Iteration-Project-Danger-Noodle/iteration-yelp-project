import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../components/App.jsx';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter, Route, Routes} from 'react-router-dom'


describe('App tests', () => {
    it('render the App Component', () => {
      const { getByTestId } = render(<App />, {wrapper: BrowserRouter});
      const appComponent = getByTestId('app-element')
      expect(appComponent).toBeInTheDocument()
    });
});