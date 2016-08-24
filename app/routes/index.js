import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Core from 'layouts/Core/Core';
import App from 'components/App';
import VisiblePostsList from 'containers/'
import { PostsList, PostDetails } from 'components/partials/';

export default function() {
    return <Route path="/" component={Core}>
              <Route path="/posts" component={App}>
              </Route>
              <Route path="/post/:id" component={PostDetails}/>
            </Route>
}
