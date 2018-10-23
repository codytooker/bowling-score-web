import React from 'react';
import cs from 'classnames';

const Ball = ({ active, score, className }) => {
  const ballClass = cs(
    className,
    'flex-grow border-black text-center',
    { 'bg-yellow-light': active },
  );
  return (
    <span className={ballClass}>{score}</span>
  );
};

export default Ball;
