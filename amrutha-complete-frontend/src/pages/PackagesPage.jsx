import React, { useState } from 'react';

const packages = [
  { img: '🏄', title: 'Goa Paradise', days: '6 Days', price: '₹19,999', highlight: 'Beach & Water Sports' },
  { img: '🚣', title: 'Kerala Serenity', days: '7 Days', price: '₹24,999', highlight: 'Backwaters & Spices' },
  { img: '🏰', title: 'Rajasthan Royal', days: '8 Days', price: '₹22,499', highlight: 'Palaces & Deserts' }
];

const contactInfo = {
  phone: '+91 99496 66526',
  whatsapp: 'https://wa.me/919949666526',
  location: 'Allwyn Colony, Phase-1, Kukatpally, Hyderabad, Telangana - 500072',
  mapsLink: 'https://www.google.com/maps/place/Amrutha+Tours+And+Travels/@17.5007611,78.4199186,17z/data=!4m6!3m5!1s0x3bcb91707240185d:0x9bdf068643129894!8m2!3d17.5007611!4d78.4199186!16s%2Fg%2F11z9bm2bwf?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D'
};

export default function PackagesPage() {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (packageIndex) => {
    setSelectedPackage(packageIndex);
    setShowContactOptions(true);
  };

  const handleBackToPackage = () => {
    setShowContactOptions(false);
    setSelectedPackage(null);
  };

  return (
    <section className='section packages-section'>
      <div className='section-container'>
        <div className='section-header'>
          <h2>Popular Tour Packages</h2>
          <p>Curated experiences for every type of traveler</p>
        </div>
        <div className='packages-grid'>
          {packages.map((pkg, idx) => (
            <article key={idx} className='package-card'>
              <div className='package-header'>
                <span className='package-image'>{pkg.img}</span>
                <span className='package-label'>{pkg.highlight}</span>
              </div>
              <div className='package-content'>
                <h3>{pkg.title}</h3>
                <p className='package-duration'>📅 {pkg.days}</p>
                <p className='package-price'>{pkg.price}</p>
                <p className='package-disclaimer'>* These are not fixed prices. Price may differ according to destination preference.</p>
              </div>
              <button 
                className='package-cta'
                onClick={() => handleBookNow(idx)}
              >
                Book Now
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Contact Options Modal */}
      {showContactOptions && (
        <div className='contact-options-overlay' onClick={() => {
          setShowContactOptions(false);
          setSelectedPackage(null);
        }}>
          <div className='contact-options-modal' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => {
              setShowContactOptions(false);
              setSelectedPackage(null);
            }}>✕</button>

            <div className='contact-header'>
              <h2>Ready to Book {selectedPackage !== null && packages[selectedPackage].title}?</h2>
              <p>Choose your preferred way to connect with us</p>
            </div>

            <div className='contact-options-grid'>
              {/* Chat Option */}
              <a href={contactInfo.whatsapp} target='_blank' rel='noopener noreferrer' className='contact-option-card'>
                <div className='option-icon'>💬</div>
                <h3>Chat With Us</h3>
                <p>Quick response on WhatsApp</p>
                <span className='option-arrow'>→</span>
              </a>

              {/* Call Option */}
              <a href={`tel:${contactInfo.phone}`} className='contact-option-card'>
                <div className='option-icon'>☎️</div>
                <h3>Call Us</h3>
                <p>Speak directly with our team</p>
                <span className='option-arrow'>→</span>
              </a>
            </div>

            <div className='contact-info-section'>
              <h3>Our Contact Information</h3>
              
              <div className='info-item'>
                <div className='info-icon'>📞</div>
                <div className='info-content'>
                  <p className='info-label'>Phone</p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </div>

              <div className='info-item'>
                <div className='info-icon'>💬</div>
                <div className='info-content'>
                  <p className='info-label'>WhatsApp</p>
                  <a href={contactInfo.whatsapp} target='_blank' rel='noopener noreferrer'>Chat on WhatsApp</a>
                </div>
              </div>

              <div className='info-item'>
                <div className='info-icon'>📍</div>
                <div className='info-content'>
                  <p className='info-label'>Address</p>
                  <p>{contactInfo.location}</p>
                  <a href={contactInfo.mapsLink} target='_blank' rel='noopener noreferrer' className='maps-link'>View on Google Maps →</a>
                </div>
              </div>

              <div className='info-item'>
                <div className='info-icon'>🕐</div>
                <div className='info-content'>
                  <p className='info-label'>Operating Hours</p>
                  <p>Monday - Sunday: 24/7 Service</p>
                </div>
              </div>
            </div>

            <button className='back-button' onClick={handleBackToPackage}>
              ← Back to Packages
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
