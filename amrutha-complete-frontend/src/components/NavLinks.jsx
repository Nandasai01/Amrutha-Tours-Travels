import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' }
];

export default function NavLinks() {
  return (
    <nav className='nav-links'>
      {navLinks.map((link) => (
        <Link key={link.to} to={link.to} className='nav-link'>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
