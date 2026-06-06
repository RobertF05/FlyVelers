import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import './Discounts.css';
import Footer from '../../components/footer.jsx';

import Salar from '../../assets/Salar.png';
import SpecialDiscount1 from '../../assets/SpecialDiscount1.png';
import SpecialDiscount2 from '../../assets/SpecialDiscount2.png';
import SpecialDiscount3 from '../../assets/SpecialDiscount3.png';
import TopDeals1 from '../../assets/TopDeals1.png';
import TopDeals2 from '../../assets/TopDeals2.png';
import TopDeals3 from '../../assets/TopDeals3.png';
import TopDeals4 from '../../assets/TopDeals4.png';
import TopDeals5 from '../../assets/TopDeals5.png';
import TravelRoutes4 from '../../assets/TravelRoutes4.jpg';
import ParisDiscountEnhanced from '../../assets/ParisDiscountEnhanced.png';
import BackgroundDiscounts1 from '../../assets/BackgroundDiscounts1.png';
import BackgroundDiscounts2 from '../../assets/BackgroundDiscounts2.png';
import BackgroundDiscounts3 from '../../assets/BackgroundDiscounts3.png';
import SingaporeAirport from '../../assets/SingaporeAirport.jpg';

const sidePromos = [
  {
    id: 'europe-wow',
    title: 'Discover The Wow Of Europe',
    image: SpecialDiscount1,
    className: 'discount-side-promo-europe',
    badge: '-50% Only This Week',
    summary: 'A compact Europe route with city stays, landmark visits and weekly promotional pricing.',
    details: [
      'Boutique hotel nights in selected European cities.',
      'Guided landmark route with cultural stops.',
      'Optional airport transfer bundle for faster arrival.',
    ],
  },
  {
    id: 'turkey',
    eyebrow: '80% Discount',
    title: 'Are You Ready For A Tour To Turkey',
    image: SpecialDiscount2,
    className: 'discount-side-promo-blue',
    summary: 'A scenic Turkey tour focused on warm-air balloon views, local dining and curated lodging.',
    details: [
      'Flexible tour dates with limited weekly seats.',
      'Panoramic sightseeing route and local guide support.',
      'Hotel and transfer options available as package add-ons.',
    ],
  },
  {
    id: 'week',
    eyebrow: 'Great deals',
    title: 'Every Week',
    caption: 'only in FlyVelers',
    image: SpecialDiscount3,
    className: 'discount-side-promo-orange',
    summary: 'Rotating FlyVelers weekly deals across beaches, city breaks and short premium escapes.',
    details: [
      'Fresh weekly destination inventory.',
      'Short-stay packages and seasonal add-ons.',
      'Best suited for flexible travelers watching for quick savings.',
    ],
  },
];

const discountCards = [
  {
    id: 'egypt',
    title: 'Egypt',
    image: TopDeals5,
    price: '$ 1,125',
    oldPrice: '$ 900',
    discount: '20%',
    summary: 'Desert views, warm-weather stays and curated cultural stops in one compact escape.',
    details: ['Desert route planning', 'Hotel options near key viewpoints', 'Optional guided day trips'],
  },
  {
    id: 'cancun',
    title: 'Paris',
    image: ParisDiscountEnhanced,
    price: '$ 500',
    oldPrice: '$ 300',
    discount: '40%',
    summary: 'A Paris city break with landmark views, boutique stays and cultural route planning.',
    details: ['Eiffel Tower route highlights', 'Central lodging options', 'Museum and cafe recommendations'],
  },
  {
    id: 'aruba',
    title: 'Maldives',
    image: TravelRoutes4,
    price: '$ 2,000',
    oldPrice: '$ 1,400',
    discount: '30%',
    summary: 'A Maldives island stay built around lagoon views, relaxation and resort convenience.',
    details: ['Resort-focused itinerary', 'Lagoon and beach access', 'Optional transfer support'],
  },
  {
    id: 'baja',
    title: 'New York',
    image: TopDeals4,
    price: '$ 900',
    oldPrice: '$ 810',
    discount: '10%',
    summary: 'A New York waterfront route with skyline views, city access and short-stay value.',
    details: ['Liberty and skyline viewpoints', 'Urban hotel options', 'Short-stay route planning'],
  },
];

const madridOffer = {
  id: 'madrid',
  title: 'Vacation in Madrid',
  image: TopDeals3,
  price: 'From $138',
  discount: 'Up to 10 nights',
  summary:
    'A Madrid vacation bundle with flexible night options, city sightseeing and central hotel choices.',
  details: [
    'Choose 5, 8 or 10 night plans depending on your travel window.',
    'Includes curated architecture, food and neighborhood route suggestions.',
    'Best for travelers who want a full city break with predictable pricing.',
  ],
};

function StarRating() {
  return (
    <span className="discount-rating" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
    </span>
  );
}

function Discounts() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [squareDrift, setSquareDrift] = useState(0);
  const [showLifetimeOffer, setShowLifetimeOffer] = useState(false);
  const [activeDiscountOffer, setActiveDiscountOffer] = useState(null);
  const scrollTimerRef = useRef(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      setIsScrolling(true);
      setSquareDrift((currentDrift) => {
        const nextDrift = currentDrift + scrollDelta * 0.16;
        return Math.max(-90, Math.min(260, Math.round(nextDrift)));
      });

      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }

      scrollTimerRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 220);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="discounts-page">
      <section className="discounts-hero" style={{ backgroundImage: `url(${Salar})` }}>
        <div className="discounts-hero-overlay">
          <div className="discounts-hero-copy">
            <h1 className="discounts-line discounts-line-script">Find your Way,</h1>
            <h2 className="discounts-line discounts-line-bold">Love Your Stay</h2>
          </div>
        </div>
      </section>

      <main
        className={`discounts-content ${isScrolling ? 'is-scrolling' : 'is-idle'}`}
        style={{ '--discount-square-drift': `${squareDrift}px` }}
      >
        <div className="discounts-square-field" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <section className="discounts-week">
          <h2>Great Discounts for this Week</h2>

          <div className="discounts-feature-layout">
            <article
              className="discounts-madrid-card discount-clickable"
              role="button"
              tabIndex={0}
              onClick={() => setActiveDiscountOffer(madridOffer)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveDiscountOffer(madridOffer);
                }
              }}
            >
              <img src={TopDeals3} alt="Vacation in Madrid" />
              <div className="madrid-panel">
                <h3>Vacation in Madrid</h3>
                <div className="madrid-countdown" aria-label="Madrid vacation countdown">
                  <div>
                    <strong>5</strong>
                    <span>Nights</span>
                    <small>$ 138</small>
                  </div>
                  <div>
                    <strong>8</strong>
                    <span>Nights</span>
                    <small>$ 150</small>
                  </div>
                  <div>
                    <strong>10</strong>
                    <span>Nights</span>
                    <small>$ 230</small>
                  </div>
                </div>
              </div>
            </article>

            <aside className="discounts-side-promos" aria-label="Weekly discount banners">
              {sidePromos.map((promo) => (
                <article
                  key={promo.id}
                  className={`discount-side-promo discount-clickable ${promo.className}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveDiscountOffer(promo)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveDiscountOffer(promo);
                    }
                  }}
                >
                  <img src={promo.image} alt="" aria-hidden="true" />
                  <div className="discount-side-copy">
                    {promo.badge ? <span className="promo-badge">{promo.badge}</span> : null}
                    {promo.eyebrow ? <span className="promo-eyebrow">{promo.eyebrow}</span> : null}
                    <h3>{promo.title}</h3>
                    {promo.caption ? <p>{promo.caption}</p> : null}
                  </div>
                </article>
              ))}
            </aside>
          </div>
        </section>

        <section className="discounts-destinations" aria-label="Discount destinations">
          {discountCards.map((card) => (
            <article
              key={card.id}
              className="discount-destination-card discount-clickable"
              role="button"
              tabIndex={0}
              onClick={() => setActiveDiscountOffer(card)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveDiscountOffer(card);
                }
              }}
            >
              <div className="destination-image">
                <img src={card.image} alt={card.title} />
                <button
                  type="button"
                  className="destination-heart"
                  aria-label={`Save ${card.title}`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="destination-meta">
                <div className="destination-main">
                  <StarRating />
                  <div className="destination-title-row">
                    <h3>{card.title}</h3>
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                  <strong>{card.price}</strong>
                  <span>{card.oldPrice}</span>
                </div>
                <div className="destination-discount">
                  <span>UPTO</span>
                  <strong>{card.discount}</strong>
                  <span>OFF</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="discounts-bottom-collage" aria-label="Travel discount background">
          <img className="discounts-bottom-mountains" src={BackgroundDiscounts1} alt="" aria-hidden="true" />
          <img className="discounts-bottom-sky" src={BackgroundDiscounts3} alt="" aria-hidden="true" />
          <img className="discounts-bottom-person" src={BackgroundDiscounts2} alt="" aria-hidden="true" />

          <button
            type="button"
            className="lifetime-offer-card"
            onClick={() => setShowLifetimeOffer(true)}
          >
            <span>All in one package</span>
            <h2>Once in a lifetime offer</h2>
            <p>
              Flights, hotel nights, guided routes and private transfers in one curated premium bundle.
            </p>
            <strong>Explore offer</strong>
          </button>
        </section>
      </main>

      <Footer />

      {showLifetimeOffer ? (
        <div
          className="lifetime-offer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lifetime-offer-title"
          onClick={() => setShowLifetimeOffer(false)}
        >
          <article
            className="lifetime-offer-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lifetime-offer-close"
              onClick={() => setShowLifetimeOffer(false)}
              aria-label="Close offer details"
            >
              x
            </button>
            <div className="lifetime-offer-media">
              <img src={SingaporeAirport} alt="Singapore Airport indoor waterfall and garden" />
              <div className="lifetime-offer-media-copy">
                <span>Singapore gateway included</span>
                <strong>All in one</strong>
              </div>
            </div>

            <div className="lifetime-offer-details">
              <span>Limited all in one bundle</span>
              <h2 id="lifetime-offer-title">Once in a lifetime offer</h2>
              <p>
                A complete FlyVelers package designed for travelers who want one booking to cover the
                entire experience: international flights, selected hotel nights, airport transfers,
                daily breakfast, landmark tickets and guided local activities.
              </p>
              <div className="lifetime-offer-benefits">
                <div>
                  <strong>Flights</strong>
                  <span>Round-trip routes with flexible departure windows.</span>
                </div>
                <div>
                  <strong>Stay</strong>
                  <span>Premium hotel nights with breakfast included.</span>
                </div>
                <div>
                  <strong>Transfers</strong>
                  <span>Private airport pickup and curated city mobility.</span>
                </div>
                <div>
                  <strong>Access</strong>
                  <span>Priority entries to selected attractions and experiences.</span>
                </div>
              </div>
              <button type="button" onClick={() => setShowLifetimeOffer(false)}>
                Continue exploring
              </button>
            </div>
          </article>
        </div>
      ) : null}

      {activeDiscountOffer ? (
        <div
          className="discount-detail-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="discount-detail-title"
          onClick={() => setActiveDiscountOffer(null)}
        >
          <article
            className="discount-detail-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="discount-detail-close"
              onClick={() => setActiveDiscountOffer(null)}
              aria-label="Close discount details"
            >
              x
            </button>
            <div className="discount-detail-image">
              <img src={activeDiscountOffer.image} alt={activeDiscountOffer.title} />
              {activeDiscountOffer.discount ? (
                <span>{activeDiscountOffer.discount} offer</span>
              ) : null}
            </div>
            <div className="discount-detail-content">
              <span>Great discounts for this week</span>
              <h2 id="discount-detail-title">{activeDiscountOffer.title}</h2>
              <p>{activeDiscountOffer.summary}</p>
              <ul>
                {activeDiscountOffer.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="discount-detail-meta">
                {activeDiscountOffer.price ? <strong>{activeDiscountOffer.price}</strong> : null}
                {activeDiscountOffer.oldPrice ? <span>Now {activeDiscountOffer.oldPrice}</span> : null}
              </div>
              <button type="button" onClick={() => setActiveDiscountOffer(null)}>
                Continue exploring
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default Discounts;
