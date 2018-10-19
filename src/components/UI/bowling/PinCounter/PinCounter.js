import React, { Component } from 'react';

import BowlingPin from '../BowlingPin/BowingPin';

class PinCounter extends Component {
  constructor() {
    super();

    this.state = {
      pins: [],
    };

    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handlePinClick(pin) {
    const { pins } = this.state;
    const index = pins.indexOf(pin);
    const newPins = [...pins];

    if (index !== -1) {
      newPins.splice(index, 1);
    } else {
      newPins.push(pin);
    }

    this.setState({
      pins: newPins,
    });
  }

  render() {
    const { pins } = this.state;

    return (
      <div className="bg-white flex flex-wrap justify-center">
        <BowlingPin number={7} handleClick={this.handlePinClick} selected={pins.indexOf(7) !== -1} />
        <BowlingPin number={8} handleClick={this.handlePinClick} selected={pins.indexOf(8) !== -1} />
        <BowlingPin number={9} handleClick={this.handlePinClick} selected={pins.indexOf(9) !== -1} />
        <BowlingPin number={10} handleClick={this.handlePinClick} selected={pins.indexOf(10) !== -1} />
        <div className="w-full"></div>
        <BowlingPin number={4} handleClick={this.handlePinClick} selected={pins.indexOf(4) !== -1} />
        <BowlingPin number={5} handleClick={this.handlePinClick} selected={pins.indexOf(5) !== -1} />
        <BowlingPin number={6} handleClick={this.handlePinClick} selected={pins.indexOf(6) !== -1} />
        <div className="w-full"></div>
        <BowlingPin number={2} handleClick={this.handlePinClick} selected={pins.indexOf(2) !== -1} />
        <BowlingPin number={3} handleClick={this.handlePinClick} selected={pins.indexOf(3) !== -1} />
        <div className="w-full"></div>
        <BowlingPin number={1} handleClick={this.handlePinClick} selected={pins.indexOf(1) !== -1} />
      </div>
    );
  }
}

export default PinCounter;
