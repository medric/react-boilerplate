import React, { PropTypes, Component } from 'react';
import { VisiblePostsList } from '../containers';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <VisiblePostsList />
      </div>
    )
  }
}
