import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Core from 'layouts/Core/Core';
import App from 'components/App';

export default function() {
    return <Route path='/' component={Core}>
              <IndexRoute component={App} />
              <Route path="/post/:id" component={PostDetails}/>
            </Route>
}