import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

class MiniPinDisplay extends Component {
  rows = [
    [1],
    [2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
  ];

  render() {
    const { frame } = this.props;

    return (
      <div className="py-px flex flex-col-reverse">
        {this.rows.map((row, index) => (
          <div key={index} className="my-px flex justify-center">
            {row.map((pin) => {
              const pinClass = cs(
                'rounded-full border w-2 h-2 mx-px',
                { 'bg-blue border-blue': frame.throw_1 && frame.throw_1.includes(pin) },
                { 'border-blue': frame.throw_2 && frame.throw_2.includes(pin) },
                { 'bg-red border-red': frame.throw_1 && !frame.throw_1.includes(pin) && frame.throw_2 && !frame.throw_2.includes(pin) },
              );
              return (
                <div key={pin} className={pinClass} />
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

MiniPinDisplay.propTypes = {
  frame: PropTypes.object.isRequired,
};

export default MiniPinDisplay;
