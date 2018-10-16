import React from 'react';
import { Link } from 'react-router-dom';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="bg-black py-4 text-center text-white">
        <Link to="/">Home</Link>
      </footer>
    </div>
  )
}

export default DefaultLayout;