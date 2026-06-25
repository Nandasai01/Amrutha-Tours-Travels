import React from 'react';

export default function Home() {
  return (
    <section className='hero'>
      <div className='hero-bg'></div>
      <div className='hero-content'>
        <div className='hero-copy'>
          <div className='badge'>🌍 Travel The World</div>
          <h2 className='hero-title'>Discover Your Next Adventure</h2>
          <p className='hero-subtitle'>
            Premium cab services, breathtaking tours, and unforgettable travel experiences
            across India. Book now and explore the beauty of the subcontinent.
          </p>
          <div className='hero-actions'>
            <a className='btn btn-primary' href='tel:+919949666526'>
              <span>📞 Call Now</span>
            </a>
            <a className='btn btn-secondary' href='https://wa.me/919949666526'>
              <span>💬 Quick Chat</span>
            </a>
          </div>
          <div className='trust-badges'>
            <div className='trust-item'><strong>10K+</strong> Happy Travelers</div>
            <div className='trust-item'><strong>500+</strong> Trips Monthly</div>
            <div className='trust-item'><strong>24/7</strong> Support</div>
          </div>
        </div>
        <div className='hero-visual'>
          {[1, 2, 3].map((i) => (
            <div key={i} className={`floating-card card-${i}`}>
              <div className='card-inner'>
                {i === 1 && '🚗'}
                {i === 2 && '🏝️'}
                {i === 3 && '✨'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
