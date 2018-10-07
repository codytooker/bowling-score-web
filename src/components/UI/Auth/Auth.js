import React from 'react';

const Auth = ({ children }) => (
  <div className="h-screen flex items-center">
    <div className="container">
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Auth;