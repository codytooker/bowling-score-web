import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../reducers/auth';

class Header extends Component {
  renderLinks() {
    if (this.props.isAuthenticated) {
      return (
        <>
          <Link to="/feature">feature</Link>
          <Link to="/signout">Sign Out</Link>
        </>
      )
    } else {
      return (
        <>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </>
      )
    }
  }

  render() {
    return (
      <nav>
        <Link to="/">home</Link>
        {this.renderLinks()}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(Header);