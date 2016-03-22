import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from 'routes';
import configureStore from 'store';

// Create redux store and sync with react-router
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
   selectLocationState: (state) => state.router
});

// Create routes
const routes = makeRoutes(store);

// Render application to the DOM
ReactDOM.render(
    <Router history={history} routes={routes} store={store}>
    </Router>,
    document.getElementById('app')
);