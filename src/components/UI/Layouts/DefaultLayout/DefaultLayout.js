import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DefaultLayout = ({ children }) => (
  <Fragment>
    <main className="pt-8 pb-16">
      <div className="container">
        {children}
      </div>
    </main>
    <footer className="fixed pin-b pin-l pin-r bg-black py-4 text-center">
      <Link to="/">Home</Link>
    </footer>
  </Fragment>
);

export default DefaultLayout;
