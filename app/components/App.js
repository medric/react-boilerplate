import React, { PropTypes, Component } from 'react';
import {} from './partials';

console.log(Item);
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <ItemsList />
      </div>
    )
  }
}
