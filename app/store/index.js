/**
 * Store configuration takes place here
 */
// https://github.com/anorudes/redux-easy-boilerplate/blob/master/src/store/configureStore.js
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import { fetchPosts } from '../actions';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState = {}, history) {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === 'development'
  });

  let routerEnhancer = routerMiddleware(history);
  const enhancer = compose(
    // Middleware
    applyMiddleware(
      thunk,
      logger,
      routerEnhancer
    ),

    // Required! Enable Redux DevTools with the chosen monitors
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(reducers, enhancer);

  // Create an enhanced history that syncs navigation events with the store
  syncHistoryWithStore(history, store);

  // Load posts for the first time
  store.dispatch(fetchPosts());

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
