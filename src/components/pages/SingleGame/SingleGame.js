import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { Heading } from '../../UI/elements';
import { fetchGamesIfNeeded } from '../../../actions/game';
import { getGameByID } from '../../../reducers/games';

class SingleGame extends Component {
  componentDidMount() {
    this.props.fetchGamesIfNeeded();
  }

  renderGames() {
    if (this.props.isLoading) {
      return <div>Show Loading</div>;
    }
    if (this.props.games.length) {
      return (
          <div>
            {this.props.games.map(game => <div key={game.id}>{game.title}</div>)}
          </div>
      );
    }
  }

  render() {
    return (
      <DefaultLayout>
        <Heading>My Games</Heading>
        {this.renderGames()}
      </DefaultLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  games: getGameByID(state, ownProps.match.params.id),
});
export default connect(mapStateToProps, { fetchGamesIfNeeded })(SingleGame);
