import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Weather component', () => {
    render(<App />);

    // Check if the Weather component is rendered
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText(/Better than Busu/i)).toBeInTheDocument();
  });

  test('renders developer information in the footer', () => {
    render(<App />);

    // Check if the developer information is rendered in the footer
    expect(screen.getByText(/Developed by: Liviu Padurariu and Mariana Georges/i)).toBeInTheDocument();
  });
});
