import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame/Frame';

const FullBoard = ({ currentFrame, currentBall, frames }) => (
  <div className="flex flex-wrap items-stretch select-none">
    {
      frames.map(frame => (
        <Frame
          className="w-1/5 md:w-auto"
          frame={frame}
          key={frame.id}
          active={frame.number === currentFrame}
          currentBall={currentBall}
        />
      ))
    }
  </div>
);

FullBoard.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  currentBall: PropTypes.number.isRequired,
  frames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    throw_1: PropTypes.array,
    throw_2: PropTypes.array,
    throw_3: PropTypes.array,
    score: PropTypes.number,
  })).isRequired,
};

export default FullBoard;
