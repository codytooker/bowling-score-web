import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../../reducers/auth';

class Home extends Component {
  renderLinks() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <Link to="/feature">feature</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col w-3/4 mx-auto">
          <Link class="btn btn--white btn--lg mb-12" to="/login">login</Link>
          <Link class="btn btn--white btn--lg" to="/signup">signup</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="h-screen flex items-center">
        <div className="container text-center">
          <h1 class="mb-12 text-white">Bowling Scores</h1>
          <nav>
            {this.renderLinks()}
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(Home);