import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from 'src/redux/Store';
import App from './App';

test('renders "Hello World"', () => {
  const { getByText } = render(
    <Provider store={Store}>
      <App />
    </Provider>
  );

  expect(getByText('Hello World')).toBeInTheDocument();
});
