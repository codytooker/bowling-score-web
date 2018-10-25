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

  render() {
    const { selectedPins, handlePinClick, frame, currentBall } = this.props;

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
                disabled={currentBall === 2 && frame.throw_1.indexOf(pin) !== -1}
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
  handlePinClick: PropTypes.func.isRequired,
  selectedPins: PropTypes.array,
};

export default PinSelector;
