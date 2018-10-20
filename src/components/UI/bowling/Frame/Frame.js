import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Frame = ({ frame, active }) => {
  const frameClass = cs(
    'flex-grow border border-black',
    { 'bg-white': active },
  );

  return (
    <div key={frame} className={frameClass}>
      <div className="border-b border-black text-center">{frame}</div>
      <div className="flex border-b border-black">
        <span className="flex-grow border-r border-black text-center">5</span>
        <span className="flex-grow text-center">5</span>
      </div>
      <div className="border-b border-black text-center">10</div>
      <div>pins</div>
    </div>
  );
};

Frame.propTypes = {
  frame: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Frame;
