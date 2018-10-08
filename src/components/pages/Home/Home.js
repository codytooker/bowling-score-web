import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../../reducers/auth';

class Home extends Component {
  renderLinks() {
    if (this.props.isAuthenticated) {
      return (
        <Fragment>
          <div className="flex flex-col w-3/4 mx-auto">
            <Link className="btn btn--white btn--lg mb-6" to="/new-game">New Game</Link>
            <Link className="btn btn--white btn--lg" to="/games">My Games</Link>
          </div>
          <div className="mt-auto">
            <Link className="btn btn--white mt-auto" to="/signout">Sign Out</Link>
          </div>
        </Fragment>
      )
    } else {
      return (
        <div className="flex flex-col w-3/4 mx-auto">
          <Link className="btn btn--white btn--lg mb-6" to="/login">Login</Link>
          <Link className="btn btn--white btn--lg" to="/signup">Sign Up</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="py-8 h-screen flex flex-col text-center container">
        <h1 className="mb-8 text-white">Bowling Scores</h1>
        {this.renderLinks()}
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