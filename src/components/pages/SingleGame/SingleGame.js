import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { Heading } from '../../UI/elements';
import { getGameByID } from '../../../reducers/games';

class SingleGame extends Component {
  render() {
    const { game } = this.props;

    return (
      <DefaultLayout>
        <Heading>{game.title}</Heading>
      </DefaultLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  game: getGameByID(state, ownProps.match.params.id),
});
export default connect(mapStateToProps)(SingleGame);
