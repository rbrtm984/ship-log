import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../client/src/components/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('updates chart data correctly when form data is submitted', () => {
    const { getByLabelText, getByText } = render(<App />);
    
    // Simulate form submission
    fireEvent.change(getByLabelText('Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('Project Name'), { target: { value: 'Project A' } });
    fireEvent.change(getByLabelText('Hours Worked'), { target: { value: '5' } });
    fireEvent.click(getByText('Submit'));

    // Assert that chart data is updated correctly
    expect(getByText('Monday')).toBeInTheDocument();
    expect(getByText('Project A')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });
});