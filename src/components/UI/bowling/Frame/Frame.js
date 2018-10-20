import React from 'react';

const Frame = ({ frame }) => (
  <div key={frame} className="flex-grow border border-black">
    <div className="border-b border-black text-center">{frame}</div>
    <div className="flex border-b border-black">
      <span className="flex-grow border-r border-black text-center">5</span>
      <span className="flex-grow text-center">5</span>
    </div>
    <div className="border-b border-black text-center">10</div>
    <div>pins</div>
  </div>
);

export default Frame;
