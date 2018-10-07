import React from 'react';

const Card = ({ title, children }) => (
  <div className="bg-white rounded py-6 px-4 shadow-lg">
    {title && <h1 className="border-b pb-2 mb-6 text-xl">{title}</h1>}
    {children}
  </div>
);

export default Card;