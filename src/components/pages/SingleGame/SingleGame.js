import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FullBoard, PinSelector, PinDisplay } from '../../UI/bowling';
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

  handlePrev = () => {
    const { currentFrame, currentBall } = this.state;
    const { game } = this.props;

    if (currentBall > 1) {
      this.setState({
        currentBall: currentBall - 1,
      });
    } else {
      const prevFrame = game.frames.find(frame => frame.number === currentFrame - 1);

      if (prevFrame.throw_1.length === 10) {
        this.setState({
          currentFrame: currentFrame - 1,
        });
      } else {
        this.setState({
          currentFrame: currentFrame - 1,
          currentBall: 2,
        });
      }
    }
  }

  handleNext = () => {
    const { currentFrame, currentBall } = this.state;
    const { game } = this.props;

    const frame = game.frames.find(frame => frame.number === currentFrame);

    if (currentBall === 1) {
      if (!frame.throw_1) {
        return;
      }

      if (frame.throw_1.length === 10) {
        this.setState({
          currentFrame: currentFrame + 1,
        });
      } else {
        this.setState({
          currentBall: 2,
        });
      }
    } else {
      if (!frame.throw_2) {
        return;
      }
      this.setState({
        currentFrame: currentFrame + 1,
        currentBall: 1,
      });
    }

    this.setState({
      selectedPins: [],
    });
  }

  handleThrowSave = () => {
    const { currentFrame, currentBall, selectedPins } = this.state;
    const { game, setThrow } = this.props;

    const frame = game.frames.find(frame => frame.number === currentFrame);

    let knockedPins;
    let framePinfall;
    if (currentBall === 1) {
      knockedPins = this.pins.filter(pin => !selectedPins.includes(pin));
    } else {
      framePinfall = [...frame.throw_1, ...selectedPins];
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
        <Heading>{game.title}</Heading>
        <FullBoard
          currentFrame={currentFrame}
          currentBall={currentBall}
          frames={game.frames}
        />
        <PinSelector
          frame={game.frames.find(frame => frame.number === currentFrame)}
          handlePinClick={this.handlePinSelect}
          currentBall={currentBall}
          selectedPins={selectedPins}
        />

        <div className="py-6 px-2 flex justify-around">
          <button className="btn btn--white" disabled={currentBall === 2} type="button">Strike</button>
          <button className="btn btn--white" disabled={currentBall === 1} type="button">Spare</button>
          <button className="btn btn--white" disabled={currentFrame === 10 && currentBall === 3} onClick={this.handleThrowSave} type="button">Save Throw</button>
        </div>
        <div className="py-6 px-2 flex justify-around">
          <button className="btn btn--white" disabled={currentFrame === 1 && currentBall === 1} onClick={this.handlePrev} type="button">Prev</button>
          <button className="btn btn--white" disabled={currentFrame === 10 && currentBall === 3} onClick={this.handleNext} type="button">Next</button>
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
