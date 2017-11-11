import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
    document.getElementById("root")
);
