import React from 'react';

export default function ContactPage() {
  return (
    <section className='section contact-section' id='contact'>
      <div className='section-container'>
        <div className='section-header'>
          <h2>Get In Touch</h2>
          <p>We're here to help plan your perfect journey</p>
        </div>
        <div className='contact-grid'>
          <a href='https://www.google.com/maps/place/Amrutha+Tours+And+Travels/@17.5007611,78.4199186,17z/data=!4m6!3m5!1s0x3bcb91707240185d:0x9bdf068643129894!8m2!3d17.5007611!4d78.4199186!16s%2Fg%2F11z9bm2bwf?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D' target='_blank' rel='noopener noreferrer' className='contact-card location-card'>
            <div className='contact-icon clickable-icon'>📍</div>
            <h3>Visit Us</h3>
            <p>Allwyn Colony, Phase-1, Kukatpally, Hyderabad, Telangana - 500072</p>
            <span className='map-link-text'>Open in Google Maps →</span>
          </a>
          <div className='contact-card'>
            <div className='contact-icon'>☎️</div>
            <h3>Call Us</h3>
            <p><a href='tel:+919949666526'>+91 99496 66526</a></p>
          </div>
          <div className='contact-card'>
            <div className='contact-icon'>💬</div>
            <h3>Chat On WhatsApp</h3>
            <p><a href='https://wa.me/919949666526'>Start Conversation</a></p>
          </div>
        </div>
        <div className='map-container'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3244357156457!2d78.4199186!3d17.5007611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91707240185d%3A0x9bdf068643129894!2sAmrutha%20Tours%20And%20Travels!5e0!3m2!1sen!2sin!4v1685123456789' width='100%' height='450' style={{ border: 0, borderRadius: '20px' }} allowFullScreen referrerPolicy='no-referrer-when-downgrade' loading='lazy'></iframe>
        </div>
      </div>
    </section>
  );
}
