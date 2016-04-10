import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Core from 'layouts/Core/Core';
import HomePage from 'components/partials/HomePage';
import App from 'components/App';

export default (store) => {
    <Route path='/' component={Core}>
        <IndexRoute component={App} />
    </Route>
}