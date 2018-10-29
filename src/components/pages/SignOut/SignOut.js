import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Auth, Card } from '../../UI';
import { signout } from '../../../actions/auth';

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <Auth>
        <Card title="Thanks For Playing">
          <div>Sorry to see you go <Link className="text-blue" to="/">Go Home</Link></div>
        </Card>
      </Auth>
    );
  }
}

export default connect(null, { signout })(SignOut);
