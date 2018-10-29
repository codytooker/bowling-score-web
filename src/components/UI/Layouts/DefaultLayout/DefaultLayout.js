import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DefaultLayout = ({ children }) => (
  <Fragment>
    <main className="pt-8 pb-16">
      <div className="container">
        {children}
      </div>
    </main>
    <footer className="fixed pin-b pin-l pin-r bg-black py-4">
      <div className="container flex justify-between text-center">
        <Link className="font-bold text-sm no-underline uppercase tracking-wide mx-2" to="/">Home</Link>
        <Link className="font-bold text-sm no-underline uppercase tracking-wide mx-2" to="/games">My Games</Link>
        <Link className="font-bold text-sm no-underline uppercase tracking-wide mx-2" to="/new-game">New Game</Link>
      </div>
    </footer>
  </Fragment>
);

export default DefaultLayout;
