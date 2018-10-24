import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

class PinDisplay extends Component {
  rows = [
    [1],
    [2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
  ];

  render() {
    const { frame } = this.props;

    return (
      <div className="bg-white py-4 flex flex-col-reverse">
        {this.rows.map(row => (
          <div className="my-2 flex justify-center">
            {row.map((pin) => {
              const pinClass = cs(
                'rounded-full mx-2 w-12 h-12 border',
                { 'bg-grey border-grey': frame.throw_1.includes(pin) },
                { 'border-grey': frame.throw_2.includes(pin) },
                { 'bg-red border-red': !frame.throw_1.includes(pin) && !frame.throw_2.includes(pin) },
              );
              return (
                <div className={pinClass} />
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

PinDisplay.propTypes = {
  frame: PropTypes.object.isRequired,
};

export default PinDisplay;
