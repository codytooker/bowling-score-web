import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

class BowlingPin extends Component {
  handleClick = () => {
    this.props.handleClick(this.props.number);
  }

  render() {
    const { number, selected, disabled } = this.props;
    const pinClass = cs(
      'btn btn--pin',
      { 'btn--selected': selected },
    );

    return (
      <button
        onClick={this.handleClick}
        className={pinClass}
        disabled={disabled}>
        {number}
      </button>
    );
  }
}


BowlingPin.defaultProps = {
  selected: false,
};

BowlingPin.propTypes = {
  number: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BowlingPin;
