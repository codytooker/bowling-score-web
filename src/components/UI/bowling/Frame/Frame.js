import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Frame = ({ frame, active }) => {
  const frameClass = cs(
    'flex-grow border border-black',
    { 'bg-white': active },
  );

  return (
    <div className={frameClass}>
      <div className="border-b border-black text-center">{frame.number}</div>
      <div className="flex border-b border-black">
        <span className="flex-grow border-r border-black text-center">{frame.throw_1.length}</span>
        <span className="flex-grow text-center">{frame.throw_2.length}</span>
        {frame.number === 10 && <span className="flex-grow border-l border-black text-center">{frame.throw_3 !== null ? frame.throw_3 : null}</span>}
      </div>
      <div className="h-6 border-b border-black text-center">{frame.score}</div>
      <div>pins</div>
    </div>
  );
};

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
};

export default Frame;
