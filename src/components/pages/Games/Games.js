import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { Heading } from '../../UI/elements';
import { fetchGamesIfNeeded } from '../../../actions/game';
import { getGames, isFetching } from '../../../reducers/games';

class Games extends Component {
  componentDidMount() {
    this.props.fetchGamesIfNeeded();
  }

  renderGames() {
    if (this.props.isLoading) {
      return <div>Show Loading</div>
    } else {
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

const mapStateToProps = state => {
  return {
    games: getGames(state),
    isLoading: isFetching(state),
  }
}
export default connect(mapStateToProps, { fetchGamesIfNeeded })(Games);