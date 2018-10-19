import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const BowlingPin = ({ number, selected, handleClick }) => {
  const pinClass = cs(
    'block w-12 h-12 m-2 border rounded-full flex items-center justify-center focus:outline-none focus:shadow-outline',
    { 'bg-blue border-blue text-white': selected },
  );
  return (
    <button onClick={() => handleClick(number)} className={pinClass}>{number}</button>
  );
};


BowlingPin.defaultProps = {
  selected: false,
};

BowlingPin.propTypes = {
  number: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BowlingPin;
