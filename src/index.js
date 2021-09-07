import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </HashRouter>, document.getElementById('root')
);
