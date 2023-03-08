import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders greeting content', () => {
  render(<App />);
  expect(screen.queryByRole('heading', { name: 'Hello World!'})).toBeInTheDocument();
  expect(screen.queryByText('It\'s good to see you!')).toBeInTheDocument();
})