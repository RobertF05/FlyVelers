import React, { useEffect, useState } from 'react';
import './Reviews.css';

import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import hombre1 from '../../assets/hombre1.png';
import mujer1 from '../../assets/mujer1.png';
import mujer2 from '../../assets/mujer2.png';

import maldivas from '../../assets/maldivas.png';
import maldivas2 from '../../assets/maldivas2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'OUR CLIENT',
    image: mujer1,
    text: 'I had a great experience using this travel website. Everything was very easy to navigate and booking my trip was fast. The prices were also very good compared to other sites. I will definitely use it again in the future.',
  },
  {
    id: 2,
    name: 'David Miller',
    role: 'OUR CLIENT',
    image: hombre1,
    text: 'I couldn’t be more grateful for the incredible experience I had with this agency. From the very first moment, everything was seamless — the booking process was simple, the staff was attentive, and every detail of my trip was perfectly organized.',
  },
  {
    id: 3,
    name: 'Laura Torres',
    role: 'OUR CLIENT',
    image: mujer2,
    text: 'I really enjoyed using this website for my vacation planning. It saved me a lot of time and effort. The interface is clean and user-friendly. Overall, a very reliable and helpful service.',
  },
];

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="reviews-page">

      {/* HERO */}
      <section
        className="reviews-hero"
        style={{ backgroundImage: `url(${maldivas})` }}
      >
        <Navbar activeLabel="Reviews" />

        <div className="reviews-hero-overlay">
          <div className="reviews-hero-texts">
            <h2 className="reviews-hero-subtitle">Find your Way,</h2>
            <h1 className="reviews-hero-title">Love Your Stay</h1>
          </div>
        </div>

      </section>

      {/* REVIEWS */}
      <section
        className="reviews-section"
        style={{ backgroundImage: `url(${maldivas2})` }}
      >
        <div className="reviews-container">
          <div className="reviews-header">
            <h2>Traveler’s Reviews</h2>
            <p>
              Discover what travelers from around the world say about their
              unforgettable experiences with FlyVelers.
            </p>
          </div>

          <div className="reviews-carousel">

            <button
              type="button"
              className="review-arrow left"
              onClick={goToPreviousSlide}
              aria-label="Previous review"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="reviews-viewport">
              <div
                className="reviews-track"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <article
                    key={review.id}
                    className="review-card"
                  >
                    <div className="review-card-overlay"></div>

                    <div className="review-content">
                      <div className="review-text-side">
                        

                        <p className="review-text">
                          {review.text}
                        </p>

                        <div className="review-bottom">
                          <div>
                            <h4>{review.name}</h4>
                            <span>{review.role}</span>
                          </div>
                        </div>
                      </div>

                      <div className="review-image-side">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="review-image"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="review-arrow right"
              onClick={goToNextSlide}
              aria-label="Next review"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div className="review-dots">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                className={`review-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
