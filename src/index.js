import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from 'muiTheme';

import App from './components/App/App';
import Reducers from './redux/reducers';

import './index.scss';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
