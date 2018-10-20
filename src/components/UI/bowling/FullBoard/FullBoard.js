import React from 'react';

import Frame from '../Frame/Frame';

const FullBoard = () => {
  const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex items-stretch select-none">
      {
        frames.map(frame => (
          <Frame frame={frame} key={frame} />
        ))
      }
    </div>
  );
};

export default FullBoard;
