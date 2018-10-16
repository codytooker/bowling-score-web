import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchGamesIfNeeded } from '../../../actions/game';

class Games extends Component {
  componentDidMount() {
    this.props.fetchGamesIfNeeded();
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-white">My Games</h1>
        <Link to="/">Temp Home Link</Link>
      </div>
    );
  }
} 
export default connect(null, { fetchGamesIfNeeded })(Games);