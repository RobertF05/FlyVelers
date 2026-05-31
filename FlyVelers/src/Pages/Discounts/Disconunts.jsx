import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlaneDeparture, 
  faXmark, 
  faChevronLeft, 
  faChevronRight,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar.jsx';
import './Discounts.css';

import Salar from '../../assets/Salar.png';
import SpecialDiscount1 from '../../assets/SpecialDiscount1.png';
import SpecialDiscount2 from '../../assets/SpecialDiscount2.png';
import SpecialDiscount3 from '../../assets/SpecialDiscount3.png';
import TopDeals1 from '../../assets/TopDeals1.png';
import TopDeals2 from '../../assets/TopDeals2.png';
import TopDeals3 from '../../assets/TopDeals3.png';
import TopDeals4 from '../../assets/TopDeals4.png';
import TopDeals5 from '../../assets/TopDeals5.png';
import BackgroundDiscounts1 from '../../assets/BackgroundDiscounts1.png';
import BackgroundDiscounts2 from '../../assets/BackgroundDiscounts2.png';
import BackgroundDiscounts3 from '../../assets/BackgroundDiscounts3.png';

const specialOffers = [
  {
    id: 'special-1',
    title: 'Enjoy Up To 60% OFF',
    label: '60 % OFF',
    eyebrow: 'Enjoy Up To',
    caption: 'on Your Booking',
    image: SpecialDiscount3,
    details: 'Book this Nile-style warm weather escape with limited weekly pricing, beach access, and flexible rescheduling.',
    theme: 'orange',
  },
  {
    id: 'special-2',
    title: 'Are you ready for a tour to Turkey?',
    label: '80% Discount',
    eyebrow: '80% Discount',
    caption: 'Are you ready for a tour to Turkey?',
    image: SpecialDiscount2,
    details: 'Includes panoramic lodging access, sunrise viewpoints, airport transfer, and curated city-night experiences.',
    theme: 'blue',
  },
  {
    id: 'special-3',
    title: 'Discover the wow of Europe',
    eyebrow: 'Discover The Wow Of Europe',
    image: SpecialDiscount1,
    details: 'A fast-selling European circuit with guided landmarks, boutique hotel nights, and photo-friendly city stops.',
    theme: 'peach',
  },
];

const topDeals = [
  {
    id: 'deal-1',
    title: 'South America',
    discount: '39%',
    image: TopDeals1,
    details: 'Urban parks, skyline viewpoints, and curated city stays with flight bundles and local transfer support.',
  },
  {
    id: 'deal-2',
    title: 'Africa',
    discount: '39%',
    image: TopDeals5,
    details: 'Desert scenery itineraries with boutique lodging, sunset experiences, and flexible departure windows.',
  },
  {
    id: 'deal-3',
    title: 'Europe',
    discount: '39%',
    image: TopDeals3,
    details: 'Classic city architecture, neighborhood walks, and carefully selected hotels close to major attractions.',
  },
  {
    id: 'deal-4',
    title: 'Asia',
    discount: '39%',
    image: TopDeals2,
    details: 'Scenic rail and heritage routes with accommodation bundles and curated sightseeing extras.',
  },
  {
    id: 'deal-5',
    title: 'North America',
    discount: '39%',
    image: TopDeals4,
    details: 'Iconic waterfront landmarks, golden-hour routes, and package rates built for short premium escapes.',
  },
];

function Discounts() {
  const [activePopup, setActivePopup] = useState(null);
  const [isTopDealsVisible, setIsTopDealsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  const popupRef = useRef(null);
  const topDealsRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Función para cambiar de slide
  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    let newIndex = index;
    
    if (index < 0) {
      newIndex = specialOffers.length - 1;
    } else if (index >= specialOffers.length) {
      newIndex = 0;
    }
    
    setCurrentSlide(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Pausar auto-play cuando el usuario interactúa
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Reiniciar auto-play después de 10 segundos de inactividad
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Touch events para swipe en móvil
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    handleUserInteraction();
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  // Intersection Observer para activar el efecto backdrop en Top Deals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTopDealsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (topDealsRef.current) {
      observer.observe(topDealsRef.current);
    }

    return () => {
      if (topDealsRef.current) {
        observer.unobserve(topDealsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActivePopup(null);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const openPopup = (event, item, category) => {
    const popupWidth = 320;
    const popupHeight = 240;
    const padding = 18;
    const left = Math.min(
      Math.max(event.clientX + 18, padding),
      window.innerWidth - popupWidth - padding,
    );
    const top = Math.min(
      Math.max(event.clientY - 26, padding + 90),
      window.innerHeight - popupHeight - padding,
    );

    setActivePopup({
      ...item,
      category,
      left,
      top,
    });
  };

  return (
    <div className="discounts-page">
      <Navbar activeLabel="Discounts" />

      <section className="discounts-hero" style={{ backgroundImage: `url(${Salar})` }}>
        <div className="discounts-hero-overlay">
          <div className="discounts-hero-copy">
            <h1 className="discounts-line discounts-line-script">Find your Way,</h1>
            <h2 className="discounts-line discounts-line-bold">Love Your Stay</h2>
          </div>
        </div>
      </section>

      <main className="discounts-content">
        <div className="discounts-intro">
          <h2>Exclusive Discounts</h2>
        </div>

        <section className="special-offers-section">
          <div className="special-offers-header">
            <h3>Special Offers</h3>
            <div className="carousel-controls">
              <button 
                className="carousel-btn pause-btn"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause' : 'Play'}
              >
                <FontAwesomeIcon icon={isAutoPlaying ? faPause : faPlay} />
              </button>
              <button 
                className="carousel-btn"
                onClick={() => { prevSlide(); handleUserInteraction(); }}
                aria-label="Previous slide"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button 
                className="carousel-btn"
                onClick={() => { nextSlide(); handleUserInteraction(); }}
                aria-label="Next slide"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div 
            className="special-offers-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="special-offers-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {specialOffers.map((offer, index) => (
                <button
                  key={offer.id}
                  type="button"
                  className={`special-offer-card special-offer-card-${offer.theme} ${index === currentSlide ? 'active' : ''}`}
                  onClick={(event) => openPopup(event, offer, 'Special offer')}
                >
                  <img src={offer.image} alt={offer.title} />
                  <div className="special-offer-overlay">
                    {offer.id === 'special-1' ? (
                      <div className="special-offer-copy special-offer-copy-left">
                        <span className="special-offer-eyebrow">{offer.eyebrow}</span>
                        <strong className="special-offer-main-off">{offer.label}</strong>
                        <span className="special-offer-caption">{offer.caption}</span>
                      </div>
                    ) : null}

                    {offer.id === 'special-2' ? (
                      <div className="special-offer-copy special-offer-copy-center">
                        <span className="special-offer-eyebrow">{offer.eyebrow}</span>
                        <strong className="special-offer-heading">{offer.caption}</strong>
                      </div>
                    ) : null}

                    {offer.id === 'special-3' ? (
                      <div className="special-offer-copy special-offer-copy-right">
                        <strong className="special-offer-heading">{offer.eyebrow}</strong>
                      </div>
                    ) : null}
                  </div>
                </button>
              ))}
            </div>

            {/* Indicadores de slide */}
            <div className="carousel-dots">
              {specialOffers.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => { goToSlide(index); handleUserInteraction(); }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section 
          className="top-deals-section" 
          ref={topDealsRef}
        >
          <h3>Top Deals Worldwide</h3>

          <div className={`top-deals-scene ${isTopDealsVisible ? 'visible' : ''}`}>
            <div className="texture-block texture-block-primary">
              <img src={BackgroundDiscounts3} alt="" aria-hidden="true" />
            </div>

            <div className="top-deals-grid top-deals-grid-featured">
              {topDeals.slice(0, 2).map((deal) => (
                <button
                  key={deal.id}
                  type="button"
                  className="deal-card"
                  onClick={(event) => openPopup(event, deal, 'Top deal')}
                >
                  <div className="deal-card-image">
                    <img src={deal.image} alt={deal.title} />
                  </div>
                  <div className="deal-badge">
                    <span>UPTO</span>
                    <strong>{deal.discount}</strong>
                    <span>OFF</span>
                  </div>
                  <div className="deal-card-body">
                    <h4>{deal.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            <div className="top-deals-grid top-deals-grid-secondary">
              {topDeals.slice(2).map((deal) => (
                <button
                  key={deal.id}
                  type="button"
                  className="deal-card"
                  onClick={(event) => openPopup(event, deal, 'Top deal')}
                >
                  <div className="deal-card-image">
                    <img src={deal.image} alt={deal.title} />
                  </div>
                  <div className="deal-badge">
                    <span>UPTO</span>
                    <strong>{deal.discount}</strong>
                    <span>OFF</span>
                  </div>
                  <div className="deal-card-body">
                    <h4>{deal.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            <div className="discounts-collage" aria-hidden="true">
              <div className="collage-color-wash" />
              <img className="collage-bg collage-bg-left" src={BackgroundDiscounts1} alt="" />
              <img className="collage-bg collage-bg-center" src={BackgroundDiscounts3} alt="" />
              <img className="collage-person" src={BackgroundDiscounts2} alt="" />
              <FontAwesomeIcon icon={faPlaneDeparture} className="collage-plane" />
            </div>
          </div>
        </section>
      </main>

      {activePopup ? (
        <div
          ref={popupRef}
          className="discount-popup"
          style={{ left: activePopup.left, top: activePopup.top }}
          role="dialog"
          aria-modal="false"
          aria-label={`${activePopup.category} details`}
        >
          <button
            type="button"
            className="discount-popup-close"
            onClick={() => setActivePopup(null)}
            aria-label="Close details"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <span className="discount-popup-tag">{activePopup.category}</span>
          <h4>{activePopup.title}</h4>
          <p>{activePopup.details}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Discounts;