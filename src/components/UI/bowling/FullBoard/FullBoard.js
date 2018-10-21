import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame/Frame';

const FullBoard = ({ currentFrame }) => {
  const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex items-stretch select-none">
      {
        frames.map(frame => (
          <Frame frame={frame} key={frame} active={frame === currentFrame} />
        ))
      }
    </div>
  );
};

FullBoard.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  frames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    throw_2: PropTypes.array,
    throw_3: PropTypes.array,
    throw_1: PropTypes.array,
    score: PropTypes.number,
  })).isRequired,
};

export default FullBoard;
