import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FullBoard, PinCounter, FrameControls } from '../../UI/bowling';
import { DefaultLayout } from '../../UI/Layouts';
import { Heading } from '../../UI/elements';
import { fetchGamesIfNeeded } from '../../../actions/game';
import { getGameByID, isFetching } from '../../../reducers/games';

class SingleGame extends Component {
  state = {
    currentFrame: 1,
  };

  componentDidMount() {
    this.props.fetchGamesIfNeeded();
  }

  updateCurrentFrame = (forward = true) => {
    const { currentFrame } = this.state;
    let newFrame = currentFrame;

    if (forward && currentFrame < 10) {
      newFrame = currentFrame + 1;
    }

    if (!forward && currentFrame > 1) {
      newFrame = currentFrame - 1;
    }

    this.setState({ currentFrame: newFrame });
  }

  render() {
    const { game, isLoading } = this.props;

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (typeof game === 'undefined') {
      return <div>Something needs to happen if id doesn't exist</div>;
    }

    return (
      <DefaultLayout>
        <div className="flex flex-col">
          <Heading>{game.title}</Heading>
          <FullBoard currentFrame={this.state.currentFrame} frames={game.frames} />
          <PinCounter />
          <FrameControls updateFrame={this.updateCurrentFrame} />
        </div>
      </DefaultLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  game: getGameByID(state, ownProps.match.params.id),
  isLoading: isFetching(state),
});
export default connect(mapStateToProps, { fetchGamesIfNeeded })(SingleGame);
