import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BowlingPin from '../BowlingPin/BowingPin';

class PinCounter extends Component {
  render() {
    const { selectedPins, handlePinClick, frame, currentBall } = this.props;
    return (
      <div className="bg-white flex flex-wrap justify-center">
        <BowlingPin
          number={7}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(7) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(7) !== -1}
        />
        <BowlingPin
          number={8}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(8) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(8) !== -1}
        />
        <BowlingPin
          number={9}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(9) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(9) !== -1}
        />
        <BowlingPin
          number={10}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(10) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(10) !== -1}
        />
        <div className="w-full" />
        <BowlingPin
          number={4}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(4) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(4) !== -1}
        />
        <BowlingPin
          number={5}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(5) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(5) !== -1}
        />
        <BowlingPin
          number={6}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(6) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(6) !== -1}
        />
        <div className="w-full" />
        <BowlingPin
          number={2}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(2) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(2) !== -1}
        />
        <BowlingPin
          number={3}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(3) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(3) !== -1}
        />
        <div className="w-full" />
        <BowlingPin
          number={1}
          handleClick={handlePinClick}
          selected={selectedPins.indexOf(1) !== -1}
          disabled={currentBall === 2 && frame.throw_1.indexOf(1) !== -1}
        />
      </div>
    );
  }
}

PinCounter.propTypes = {
  frame: PropTypes.object.isRequired,
  currentBall: PropTypes.number.isRequired,
  handlePinClick: PropTypes.func.isRequired,
  selectedPins: PropTypes.array,
};

export default PinCounter;
