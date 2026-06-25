import React from 'react';
import Brand from './Brand';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <header className='nav'>
      <Brand />
      <NavLinks />
    </header>
  );
}
