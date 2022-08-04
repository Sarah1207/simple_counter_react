import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders <h1> text', () => {
  render(<App />);
  const textElement = screen.getByText(/simple/i);
  expect(textElement).toBeInTheDocument();
});

test('should render the data-testid="count"', () => {
  render(<App />);
  const element = screen.getByTestId("count");
  expect(element).toBeInTheDocument();
});
