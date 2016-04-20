import React, { PropTypes, Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <header>
        <h1>Posts</h1>
      </header>
    );
  }

}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;