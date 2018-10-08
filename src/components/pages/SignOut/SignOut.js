import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>Sorry to see you go <Link to="/">Go Home</Link></div>
  }
}

export default connect(null, actions)(SignOut);