// import necessary react testing library helpers here
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter.js';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByRole('button', { name: /\+/i });
  const countEl = screen.getByTestId('count');
  const prev = parseInt(countEl.textContent);
  fireEvent.click(increment);
  const curr = parseInt(countEl.textContent);
  expect(curr).toBe(prev + 1);

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByRole('button', { name: /\-/i });
  const countEl = screen.getByTestId('count');
  const prev = parseInt(countEl.textContent);
  fireEvent.click(decrement);
  const curr = parseInt(countEl.textContent);
  expect(curr).toBe(prev - 1);
});
