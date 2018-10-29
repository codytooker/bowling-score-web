import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { format } from 'date-fns';

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
      return <div>Show Loading</div>;
    }

    if (this.props.games.length) {
      return (
        <Fragment>
          {
            this.props.games.map(game => (
              <Link className="block bg-white mb-4 p-4 rounded shadow-lg text-black no-underline" key={game.id} to={`games/${game.id}`}>
                <span className="block mb-2"><strong>Title: </strong>{game.title}</span>
                <span className="block mb-2"><strong>Date: </strong>{format(game.date, 'MMM Do')}</span>
                <span><strong>Time: </strong>{format(game.date, 'h:mm a')}</span>
              </Link>
            ))
          }
        </Fragment>
      );
    }
  }

  render() {
    return (
      <DefaultLayout>
        <Heading className="mb-8">My Games</Heading>
        {this.renderGames()}
      </DefaultLayout>
    );
  }
}

const mapStateToProps = state => ({
  games: getGames(state),
  isLoading: isFetching(state),
});
export default connect(mapStateToProps, { fetchGamesIfNeeded })(Games);
