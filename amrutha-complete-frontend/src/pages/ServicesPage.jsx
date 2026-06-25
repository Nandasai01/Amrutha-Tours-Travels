import React, { useState } from 'react';

const services = [
  {
    icon: '🚕',
    title: 'Local Cab Service',
    desc: 'Quick and reliable city rides for any occasion',
    color: 'gradient-1',
    details: {
      overview: 'Our local cab service provides quick and reliable transportation throughout the city.',
      features: ['24/7 availability', 'Professional drivers', 'Real-time tracking', 'Competitive pricing', 'Comfortable vehicles'],
      benefits: ['Save time on commutes', 'Safe and secure travel', 'No hidden charges', 'Easy booking process', 'Customer support available'],
      ideal: 'Perfect for daily commutes, shopping trips, airport visits, and any local travel needs.'
    }
  },
  {
    icon: '🛣️',
    title: 'Outstation Trips',
    desc: 'Comfortable intercity travel to nearby destinations',
    color: 'gradient-2',
    details: {
      overview: 'Travel comfortably between cities with our reliable outstation cab services.',
      features: ['Long-distance routes', 'AC vehicles', 'Flexible packages', 'Professional drivers', 'Fuel-efficient'],
      benefits: ['Affordable rates', 'Safe journey', 'Rest stops included', 'On-time delivery', 'Pre-booked discounts'],
      ideal: 'Ideal for weekend getaways, business trips, family vacations, and intercity travel.'
    }
  },
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'Hassle-free airport pickup and drop services',
    color: 'gradient-3',
    details: {
      overview: 'Reliable airport transfer services for a smooth travel experience.',
      features: ['Flight-time tracking', 'Flexible scheduling', 'Airport expertise', 'Extra luggage space', 'Professional drivers'],
      benefits: ['No waiting time', 'Stress-free travel', 'Fixed pricing', 'Punctual service', 'VIP assistance available'],
      ideal: 'Perfect for all travelers - solo, family, or business professionals needing airport pickup or drop-off.'
    }
  },
  {
    icon: '🏖️',
    title: 'Holiday Packages',
    desc: 'All-inclusive tour packages to exotic locations',
    color: 'gradient-4',
    details: {
      overview: 'Experience memorable holidays with our all-inclusive tour packages.',
      features: ['Complete itineraries', 'Hotel arrangements', 'Meal plans included', 'Guided tours', 'Travel insurance'],
      benefits: ['All-in-one solution', 'Budget-friendly', 'Hassle-free planning', 'Expert guides', 'Unforgettable memories'],
      ideal: 'Great for families, groups, and individuals looking for complete holiday solutions.'
    }
  },
  {
    icon: '🙏',
    title: 'Pilgrimage Tours',
    desc: 'Sacred journeys with comfort and convenience',
    color: 'gradient-5',
    details: {
      overview: 'Spiritual journeys made comfortable with our dedicated pilgrimage tour services.',
      features: ['Sacred site visits', 'Religious guidance', 'Comfortable stay', 'Experienced guides', 'Group packages'],
      benefits: ['Peaceful travel', 'Spiritual fulfillment', 'Group discounts', 'All arrangements included', 'Cultural respect'],
      ideal: 'Ideal for devotees seeking meaningful pilgrimage experiences with maximum comfort.'
    }
  },
  {
    icon: '🏢',
    title: 'Corporate Travel',
    desc: 'Professional solutions for business travel needs',
    color: 'gradient-6',
    details: {
      overview: 'Professional transportation solutions tailored for your business travel requirements.',
      features: ['Executive vehicles', 'Business hours priority', 'Expense management', 'Fleet management', 'Bulk discounts'],
      benefits: ['Enhanced productivity', 'Professional image', 'Cost savings', 'Reliable service', 'Customized solutions'],
      ideal: 'Perfect for companies needing reliable transportation for employees and clients.'
    }
  }
];

const contactInfo = {
  phone: '+91 99496 66526',
  whatsapp: 'https://wa.me/919949666526',
  location: 'Allwyn Colony, Phase-1, Kukatpally, Hyderabad, Telangana - 500072',
  mapsLink: 'https://www.google.com/maps/place/Amrutha+Tours+And+Travels/@17.5007611,78.4199186,17z/data=!4m6!3m5!1s0x3bcb91707240185d:0x9bdf068643129894!8m2!3d17.5007611!4d78.4199186!16s%2Fg%2F11z9bm2bwf?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D'
};

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleBookNow = () => {
    setShowContactOptions(true);
  };

  const handleBackToService = () => {
    setShowContactOptions(false);
  };

  return (
    <section className='section services-section'>
      <div className='section-container'>
        <div className='section-header'>
          <h2>Our Premium Services</h2>
          <p>Comprehensive travel solutions tailored for every journey</p>
        </div>
        <div className='services-grid'>
          {services.map((service, idx) => (
            <article
              key={idx}
              className={`service-card ${service.color} ${hoveredCard === idx ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedService(idx)}
            >
              <div className='service-icon'>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className='service-footer'>Explore →</div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService !== null && !showContactOptions && (
        <div className='service-modal-overlay' onClick={() => setSelectedService(null)}>
          <div className='service-modal' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setSelectedService(null)}>✕</button>
            
            <div className='modal-header'>
              <div className='modal-icon'>{services[selectedService].icon}</div>
              <h2>{services[selectedService].title}</h2>
            </div>

            <div className='modal-content'>
              <div className='modal-section'>
                <h3>Overview</h3>
                <p>{services[selectedService].details.overview}</p>
              </div>

              <div className='modal-section'>
                <h3>Key Features</h3>
                <ul className='features-list'>
                  {services[selectedService].details.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className='modal-section'>
                <h3>Benefits</h3>
                <ul className='benefits-list'>
                  {services[selectedService].details.benefits.map((benefit, idx) => (
                    <li key={idx}>◆ {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className='modal-section ideal-for'>
                <h3>Ideal For</h3>
                <p>{services[selectedService].details.ideal}</p>
              </div>

              <button className='modal-cta' onClick={handleBookNow}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Options Modal */}
      {showContactOptions && (
        <div className='contact-options-overlay' onClick={() => {
          setShowContactOptions(false);
          setSelectedService(null);
        }}>
          <div className='contact-options-modal' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => {
              setShowContactOptions(false);
              setSelectedService(null);
            }}>✕</button>

            <div className='contact-header'>
              <h2>Ready to Book?</h2>
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

            <button className='back-button' onClick={handleBackToService}>
              ← Back to Service Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
