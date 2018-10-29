import React from 'react';

const Auth = ({ children }) => (
  <div className="h-screen flex items-center">
    <div className="container flex-grow">
      {children}
    </div>
  </div>
);

export default Auth;
