import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BowlingPin from '../BowlingPin/BowingPin';

class PinSelector extends Component {
  rows = [
    [1],
    [2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
  ];

  isDisabled = (pin) => {
    const { currentFrame, currentBall, frame } = this.props;

    if (currentFrame === 10 && currentBall === 1) {
      return false;
    }

    if (currentFrame === 10 && currentBall === 2) {
      if (frame.throw_1.length === 10) {
        return false;
      }

      return frame.throw_1.indexOf(pin) !== -1;
    }

    if (currentFrame === 10 && currentBall === 3) {
      if ([10, 20].includes(frame.throw_1.length + frame.throw_2.length)) {
        return false;
      }

      return frame.throw_2.indexOf(pin) !== -1;
    }

    if (currentBall === 2 && frame.throw_1.indexOf(pin) !== -1) {
      return true;
    }

    return false;
  }

  render() {
    const { selectedPins, handlePinClick } = this.props;

    return (
      <div className="bg-white py-4 flex flex-col-reverse">
        {this.rows.map((row, index) => (
          <div key={index} className="my-2 flex justify-center">
            {row.map(pin => (
              <BowlingPin
                key={pin}
                number={pin}
                handleClick={handlePinClick}
                selected={selectedPins.indexOf(pin) !== -1}
                disabled={this.isDisabled(pin)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

PinSelector.propTypes = {
  frame: PropTypes.object.isRequired,
  currentBall: PropTypes.number.isRequired,
  currentFrame: PropTypes.number.isRequired,
  handlePinClick: PropTypes.func.isRequired,
  selectedPins: PropTypes.array,
};

export default PinSelector;
