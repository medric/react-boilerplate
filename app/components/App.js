import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class App extends React.Component {

    render () {
        return (
            <Provider store={ this.props.store }>
                <div style={{ height: '100%'}}>
                </div>
            </Provider>
        )
    }
}
