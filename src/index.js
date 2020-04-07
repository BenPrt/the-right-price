import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from 'muiTheme';

import App from './components/App/App';
import Store from './redux/Store';

import './index.scss';

const store = Store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
