import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, level, className, ...rest }) => {
  const HeadingLevel = `h${level}`;
  const classNames = ['text-center text-white', className].join(' ');

  return <HeadingLevel {...rest} className={classNames}>{children}</HeadingLevel>
}

Heading.defaultProps = {
  level: '1',
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6',]).isRequired,
  className: PropTypes.string,
}

export default Heading;