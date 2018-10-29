import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { Heading } from '../../UI/elements';
import { isAuthenticated } from '../../../reducers/auth';

class Home extends Component {
  renderLinks() {
    if (this.props.isAuthenticated) {
      return (
        <div className="text-center">
            <Link className="block btn btn--white btn--lg mb-6" to="/new-game">New Game</Link>
            <Link className="block btn btn--white btn--lg mb-8" to="/games">My Games</Link>
            <Link className="btn btn--white mx-auto" to="/signout">Sign Out</Link>
        </div>
      );
    }
    return (
      <>
        <Link className="block btn btn--white btn--lg mb-6" to="/login">Login</Link>
        <Link className="block btn btn--white btn--lg" to="/signup">Sign Up</Link>
      </>
    );
  }

  render() {
    return (
      <DefaultLayout>
        <Heading className="mb-8">Bowling Scores</Heading>
        {this.renderLinks()}
      </DefaultLayout>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Home);
