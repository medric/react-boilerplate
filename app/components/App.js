import React, { PropTypes, Component } from 'react';
import { Header, Map } from './partials';
import { VisiblePostsList } from '../containers';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <Map />
      </div>
    )
  }
}

export default App;
