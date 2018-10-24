import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FullBoard, PinCounter } from '../../UI/bowling';
import { DefaultLayout } from '../../UI/Layouts';
import { Heading } from '../../UI/elements';
import { fetchGamesIfNeeded } from '../../../actions/game';
import { setThrow } from '../../../actions/frame';
import { getGameByID, isFetching } from '../../../reducers/games';

class SingleGame extends Component {
  pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  state = {
    currentFrame: 1,
    currentBall: 1,
    selectedPins: [],
    isSelecting: false,
  };

  componentDidMount() {
    this.props.fetchGamesIfNeeded();
  }

  componentDidUpdate() {
    const { game } = this.props;
    const { isSelecting, currentFrame, currentBall } = this.state;

    if (typeof game === 'undefined' || isSelecting) {
      return;
    }

    const frame = game.frames.find(frame => frame.number === currentFrame);

    let newSelectedPins = [];
    if (frame[`throw_${currentBall}`]) {
      newSelectedPins = this.pins.filter(pin => !frame[`throw_${currentBall}`].includes(pin));
    }

    this.setState({
      selectedPins: newSelectedPins,
      isSelecting: true,
    });
  }

  handlePinSelect = (pin) => {
    const { selectedPins } = this.state;
    const index = selectedPins.indexOf(pin);
    const newPins = [...selectedPins];

    if (index !== -1) {
      newPins.splice(index, 1);
    } else {
      newPins.push(pin);
    }

    this.setState({
      selectedPins: newPins,
    });
  }

  handleNext = () => {
    const { currentFrame, currentBall, selectedPins } = this.state;
    const { game, setThrow } = this.props;

    const frame = game.frames.find(frame => frame.number === currentFrame);

    let knockedPins;
    let framePinfall;
    if (currentBall === 1) {
      knockedPins = this.pins.filter(pin => !selectedPins.includes(pin));
    } else {
      framePinfall = [...frame.throw_1, ...selectedPins];
      console.log(framePinfall);
      knockedPins = this.pins.filter(pin => !framePinfall.includes(pin));
    }

    setThrow(frame.id, currentBall, knockedPins)
      .then(() => {
        if (currentBall === 1) {
          this.setState({
            currentBall: 2,
          });
        } else if (currentFrame === 10 && currentBall === 2) {
          this.setState({
            currentBall: 3,
          });
        } else {
          this.setState({
            currentBall: 1,
            currentFrame: currentFrame + 1,
          });
        }

        this.setState({
          selectedPins: [],
          isSelecting: false,
        });
      });
  }

  render() {
    const { game, isLoading } = this.props;
    const { currentBall, currentFrame, selectedPins } = this.state;

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
          <FullBoard
            currentFrame={currentFrame}
            currentBall={currentBall}
            frames={game.frames}
          />
          <PinCounter
            frame={game.frames.find(frame => frame.number === currentFrame)}
            handlePinClick={this.handlePinSelect}
            currentBall={currentBall}
            selectedPins={selectedPins}
          />
          <div className="py-6 px-2 flex justify-around">
            <button onClick={this.handleNext} className="btn btn--white" type="button">Prev</button>
            <button className="btn btn--white" type="button">Strike</button>
            <button className="btn btn--white" type="button">Spare</button>
            <button
              className="btn btn--white"
              onClick={this.handleNext}
              disabled={currentFrame === 10 && currentBall === 3}
              type="button">
              Next
            </button>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  game: getGameByID(state, ownProps.match.params.id),
  isLoading: isFetching(state),
});
export default connect(mapStateToProps, { fetchGamesIfNeeded, setThrow })(SingleGame);


// TODO: Next shouldn't be able to go to the next frame if the previous one isn't finished
// TODO: Strike should only work when first ball is active
// TODO: Spare should only work when second ball is active
