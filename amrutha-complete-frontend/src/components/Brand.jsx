import React, { useState } from 'react';

export default function Brand() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className='brand'>
      {logoError ? (
        <span className='logo-icon'>✈️</span>
      ) : (
        <img
          src='/logo.png'
          alt='Amrutha Tours & Travels logo'
          className='logo-image'
          onError={() => setLogoError(true)}
        />
      )}
      <div>
        <h1>Amrutha Tours & Travels</h1>
        <p>Your Journey, Our Passion</p>
      </div>
    </div>
  );
}
