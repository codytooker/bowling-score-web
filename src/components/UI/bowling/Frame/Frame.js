import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import MiniPinDisplay from '../MiniPinDisplay/MiniPinDisplay';
import Ball from '../Ball/Ball';

class Frame extends Component {
  getBallScore = (number) => {
    const { frame } = this.props;

    if (number === 1) {
      if (frame.throw_1 === null) {
        return '';
      }

      if (frame.throw_1.length === 10) {
        return 'X';
      }

      return frame.throw_1.length;
    } if (number === 2) {
      if (frame.throw_2 === null) {
        return '';
      }

      if (frame.throw_1.length + frame.throw_2.length === 10) {
        return '/';
      }

      return frame.throw_2.length;
    }
  };

  render() {
    const { frame, active, currentBall } = this.props;

    const frameClass = cs(
      'flex-grow border border-black',
      { 'bg-white': active },
    );

    return (
      <div className={frameClass}>
        <div className="border-b border-black text-center">{frame.number}</div>
        <div className="h-6 flex border-b border-black">
          <Ball className="border-r" score={this.getBallScore(1)} active={active && currentBall === 1} />
          <Ball score={this.getBallScore(2)} active={active && currentBall === 2} />
          {frame.number === 10 && <Ball className="border-l" score={this.getBallScore(3)} active={active && currentBall === 3} />}
        </div>
        <div className="h-6 border-b border-black text-center">{frame.score}</div>
        <div>
          <MiniPinDisplay frame={frame} />
        </div>
      </div>
    );
  }
}

Frame.propTypes = {
  frame: PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    throw_1: PropTypes.array,
    throw_2: PropTypes.array,
    throw_3: PropTypes.array,
    score: PropTypes.number,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  currentBall: PropTypes.number.isRequired,
};

export default Frame;
