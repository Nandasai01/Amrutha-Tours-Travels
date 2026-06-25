import React, { useState } from 'react';

const testimonials = [
  { name: 'Rajesh Kumar', rating: 5, text: 'Amazing service! The driver was professional and the journey was comfortable. Highly recommended!' },
  { name: 'Priya Sharma', rating: 5, text: 'Best travel experience ever. The itinerary was perfect and the support team was very responsive.' },
  { name: 'Vikram Singh', rating: 5, text: 'Excellent value for money. Booked three packages and each one was better than expected.' }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(testimonials);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    review: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.review.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Add new review to the list
    const newReview = {
      name: formData.name,
      rating: formData.rating,
      text: formData.review
    };

    setReviews(prev => [newReview, ...prev]);

    // Show success message
    setSuccessMessage('Thank you! Your review has been submitted successfully.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 5,
      review: ''
    });

    // Close form and hide success message after 3 seconds
    setTimeout(() => {
      setShowForm(false);
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <section className='section testimonials-section'>
      <div className='section-container'>
        <div className='section-header'>
          <h2>Guest Reviews</h2>
          <p>See what travelers say about their experiences</p>
        </div>

        <div className='reviews-header'>
          <button className='give-review-btn' onClick={() => setShowForm(!showForm)}>
            ✍️ Give Your Review
          </button>
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className='review-form-overlay' onClick={() => setShowForm(false)}>
            <div className='review-form-modal' onClick={(e) => e.stopPropagation()}>
              <button className='modal-close' onClick={() => setShowForm(false)}>✕</button>

              <div className='form-header'>
                <h2>Share Your Experience</h2>
                <p>We'd love to hear about your journey with us</p>
              </div>

              {successMessage && (
                <div className='success-message'>
                  ✓ {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmitReview} className='review-form'>
                <div className='form-group'>
                  <label htmlFor='name'>Your Name *</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Enter your full name'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Email Address *</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter your email'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label>Your Rating *</label>
                  <div className='rating-selector'>
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type='button'
                        className={`star-btn ${
                          (hoverRating || formData.rating) >= star ? 'active' : ''
                        }`}
                        onClick={() => handleRatingChange(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      >
                        ⭐
                      </button>
                    ))}
                    {formData.rating > 0 && (
                      <span className='rating-text'>
                        {formData.rating} star{formData.rating > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='review'>Your Review/Feedback *</label>
                  <textarea
                    id='review'
                    name='review'
                    value={formData.review}
                    onChange={handleInputChange}
                    placeholder='Share your experience, comments, and feedback...'
                    rows='5'
                    required
                  ></textarea>
                </div>

                <button type='submit' className='submit-review-btn'>
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        <div className='testimonials-grid'>
          {reviews.map((review, idx) => (
            <div key={idx} className='testimonial-card'>
              <div className='testimonial-header'>
                <div className='avatar'>{review.name[0]}</div>
                <div className='testimonial-meta'>
                  <h4>{review.name}</h4>
                  <div className='stars'>{'⭐'.repeat(review.rating)}</div>
                </div>
              </div>
              <p className='testimonial-text'>"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
