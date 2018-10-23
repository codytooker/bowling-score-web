import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import Ball from '../Ball/Ball';

class Frame extends Component {
  getBallScore = ball => (ball !== null ? ball.length : '');

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
          <Ball className="border-r" score={this.getBallScore(frame.throw_1)} active={active && currentBall === 1} />
          <Ball score={this.getBallScore(frame.throw_2)} active={active && currentBall === 2} />
          {frame.number === 10 && <Ball className="border-l" score={this.getBallScore(frame.throw_3)} active={active && currentBall === 3} />}
        </div>
        <div className="h-6 border-b border-black text-center">{frame.score}</div>
        <div>pins</div>
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
