import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { fetchGamesIfNeeded } from '../../../actions/game';
import { getGames } from '../../../reducers/games';

class Games extends Component {
  componentDidMount() {
    this.props.fetchGamesIfNeeded();
  }

  renderGames() {
    if (this.props.games.length) {
      return (
        <div>
          {this.props.games.map(game => {
            return <div key={game.id}>{game.title}</div>
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <DefaultLayout>
        <h1 className="text-center text-white">My Games</h1>
        {this.renderGames()}
      </DefaultLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: getGames(state),
  }
}
export default connect(mapStateToProps, { fetchGamesIfNeeded })(Games);