/**
 * Store configuration takes place here
 */
// https://github.com/anorudes/redux-easy-boilerplate/blob/master/src/store/configureStore.js
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';
import { fetchPosts } from '../actions';

export default function configureStore(initialState = {}, history) {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === 'development'
  });

  const enhancer = compose(
    // Middleware
    applyMiddleware(
      thunk,
      logger
    ),

    // Required! Enable Redux DevTools with the monitors you chose
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancer);

  // Load posts for the first time
  store.dispatch(fetchPosts()).then(() =>
    console.log(store.getState())
  );

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
