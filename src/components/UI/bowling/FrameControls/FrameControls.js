import React from 'react';
import PropTypes from 'prop-types';

const FrameControls = ({ updateFrame }) => (
  <div className="py-6 px-2 flex justify-around">
    <button onClick={() => updateFrame(false)} className="btn btn--white" type="button">Prev</button>
    <button className="btn btn--white" type="button">Strike</button>
    <button className="btn btn--white" type="button">Spare</button>
    <button onClick={() => updateFrame()} className="btn btn--white" type="button">Next</button>
  </div>
);

FrameControls.propTypes = {
  updateFrame: PropTypes.func.isRequired,
};

export default FrameControls;

// TODO: Next should move you to next ball regardless of frame
// TODO: Next shouldn't be able to go to the next frame if the previous one isn't finished
// TODO: Strike should only work when first ball is active
// TODO: Spare should only work when second ball is active
