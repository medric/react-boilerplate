import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Core from 'layout/Core/Core'
import HomePage from 'components/partials/HomePage'

export default (store) => {
    <Route path='/' component={Core}>
        <IndexRoute component={App} />
    </Route>
}