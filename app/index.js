import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from 'routes';
import configureStore from 'store';

// Load main from stylesheets so style is available for the components
require('./stylesheets/sass/main.scss');

const initialState = window.__initialState__;

// Create Redux store and sync with react-router
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

console.log(store.getState());

// Create routes
const routes = makeRoutes();

// Render application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
);