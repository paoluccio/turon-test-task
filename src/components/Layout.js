import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div className='app'>
    <header className='header'>
      <Link to='/' className='home-link'>
        <h1 className='app-title'>
          Corona
          {String.fromCodePoint(128567)}
          <span className='title-chunk'>Rama</span>
        </h1>
      </Link>
    </header>
    <div className='container'>
      {children}
    </div>
  </div>
);

export default Layout;