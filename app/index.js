import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the partials
import HomePage from './components/partials/HomePage.react';
import App from './components/App.react';

ReactDOM.render(
    <Router history={createHistory()}>
        <Route component={App}>
            <Route path="/" component={HomePage} />
        </Route>
    </Router>,
    document.getElementById('app')
);