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
        <div className="page__container-header row">
          <section class="nav-area">
            <span id="nav-area--title">Posts</span>
          </section>
        </div>
      </header>
    );
  }

}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;