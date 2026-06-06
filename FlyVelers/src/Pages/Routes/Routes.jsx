import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCalendarDays,
  faHeart,
  faHotel,
  faLocationDot,
  faMapLocationDot,
  faUmbrellaBeach,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer.jsx';
import TravelRoutes1 from '../../assets/TravelRoutes1.png';
import TravelRoutes2 from '../../assets/TravelRoutes2.png';
import TravelRoutes3 from '../../assets/TravelRoutes3.png';
import TravelRoutes4 from '../../assets/TravelRoutes4.jpg';
import TravelRoutes5 from '../../assets/TravelRoutes5.png';
import TravelRoutes6 from '../../assets/TravelRoutes6.png';
import TravelRoutes7 from '../../assets/TravelRoutes7.png';
import TravelRoutes8 from '../../assets/TravelRoutes8.png';
import TravelRoutes9 from '../../assets/TravelRoutes9.png';
import TravelRoutes11 from '../../assets/TravelRoutes11.png';
import TravelRoutes12 from '../../assets/TravelRoutes12.png';
import TravelRoutes13 from '../../assets/TravelRoutes13.jpg';
import TravelRoutes14 from '../../assets/TravelRoutes14.png';
import TravelRoutesWarmSkyBg from '../../assets/TravelRoutesWarmSkyBg.png';
import TravelRoutesOceanLayer from '../../assets/TravelRoutesOceanLayer.png';
import TravelRoutesBalloonOverlay from '../../assets/TravelRoutesBalloonOverlay.png';
import TravelRoutesCruiseOverlay from '../../assets/TravelRoutesCruiseOverlay.png';
import TravelRoutesPlaneOverlay from '../../assets/TravelRoutesPlaneOverlay.png';
import './Routes.css';

const beautyPlaces = [
  {
    id: 'san-francisco',
    type: 'place',
    title: 'San Francisco',
    image: TravelRoutes13,
    detailsTitle: 'Golden Gate Nights',
    description: 'Skyline views, waterfront walks and premium city lodging around the Bay.',
    stats: ['2 Flights', '1 Hotel', '2 Transfers', '4 Activities'],
    duration: '5 days',
    price: 'From $300',
    popup:
      'A short premium circuit with bridge viewpoints, bay cruises, downtown stays and sunset photography stops.',
  },
  {
    id: 'maldives',
    type: 'place',
    title: 'Maldives',
    image: TravelRoutes3,
    detailsTitle: 'Ultimate Circle Island',
    description: 'Private villas, turquoise water and a quiet escape built around ocean comfort.',
    stats: ['2 Flights', '1 Hotel', '2 Transfers', '4 Activities'],
    duration: '6 days',
    price: 'From $800',
    popup:
      'Includes overwater villa accommodation, breakfast service, seaplane transfer and a guided reef experience.',
  },
  {
    id: 'summer-bonanza',
    type: 'promo',
    title: 'Summer Bonanza!',
    image: TravelRoutes9,
    detailsTitle: 'Seasonal beach promotion',
    description:
      'Enjoy coastal transfers in shared coaches, choose from short or week-long stays and get a free rapid antigen test in selected hotels.',
    cta: 'View package details',
    popup:
      'Limited beach inventory with flexible check-in dates, seaside lodging and add-on airport transfer bundles.',
  },
];

const beautyAttractions = [
  {
    id: 'louvre',
    eyebrow: 'Enjoy these cool staycation promotions.',
    title: 'Best staycation deals',
    image: TravelRoutes6,
    popup:
      'Museum-side boutique stays, skip-the-line cultural passes and evening river walks in central Paris.',
  },
  {
    id: 'kayak',
    eyebrow: "Don't forget to check out these activities.",
    title: 'All Time Favourite Activities in Nature',
    image: TravelRoutes8,
    popup:
      'Kayak circuits, calm-water sessions, local guides and flexible day plans for relaxed active travel.',
  },
  {
    id: 'europe',
    eyebrow: 'Taste the Food',
    title: 'Discover the wow of Europe',
    image: TravelRoutes12,
    popup:
      'Canal-side dining, old-town routes and photo-focused evenings with handpicked culinary stops.',
  },
];

const trendingDestinations = [
  {
    id: 'paris',
    title: 'Paris',
    image: TravelRoutes7,
    stamp: 'City Pass',
    route: 'Seine Lights',
    season: '4 nights',
    popup:
      'Classic Paris route with central hotel, landmark entries and optional Seine dinner cruise.',
  },
  {
    id: 'maldivas-trend',
    title: 'Maldivas',
    image: TravelRoutes14,
    stamp: 'Island Escape',
    route: 'Blue Atolls',
    season: '6 nights',
    popup:
      'A tropical island escape with dramatic sea views, snorkeling stops and resort-focused relaxation.',
  },
  {
    id: 'singapore',
    title: 'Singapore',
    image: TravelRoutes5,
    stamp: 'Urban Future',
    route: 'Garden Loop',
    season: '5 nights',
    popup:
      'Future-facing gardens, skyline decks and polished urban stays with efficient local mobility.',
  },
  {
    id: 'coastal-escape',
    title: 'Coastal Escape',
    image: TravelRoutes1,
    stamp: 'Sea Route',
    route: 'Roman Shore',
    season: '3 nights',
    popup:
      'Wide-open seascapes, quiet beaches and slow-travel itineraries for a low-density retreat.',
  },
  {
    id: 'china-flavors',
    title: 'China',
    image: TravelRoutes4,
    stamp: 'Food Route',
    route: 'Lagoon View',
    season: '5 nights',
    popup:
      'Food-first route with local tasting sessions, market visits and curated regional dining recommendations.',
  },
  {
    id: 'tulum',
    title: 'Tulum',
    image: TravelRoutes2,
    stamp: 'Beach Ticket',
    route: 'Coral Coast',
    season: '4 nights',
    popup:
      'Turquoise-water resort package with beachfront mornings, private transfer options and laid-back nightlife.',
  },
];

function Routes() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeTrendingItem, setActiveTrendingItem] = useState(null);
  const [heroIntroPhase, setHeroIntroPhase] = useState('enter');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setHeroIntroPhase('exit');
    }, 2400);

    const hideTimer = window.setTimeout(() => {
      setHeroIntroPhase('hidden');
    }, 3400);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const shouldLockBody =
      heroIntroPhase !== 'hidden' || Boolean(activeItem) || Boolean(activeTrendingItem);

    if (!shouldLockBody) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null);
        setActiveTrendingItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.scrollBehavior = 'auto';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, activeTrendingItem, heroIntroPhase]);

  return (
    <div className="routes-page">
      {heroIntroPhase !== 'hidden' ? (
        <section
          className={`routes-hero-intro routes-hero-intro-${heroIntroPhase}`}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 28, 53, 0.05), rgba(12, 28, 53, 0.16)), url(${TravelRoutes11})` }}
        >
          <div className="routes-hero-overlay">
            <div className="routes-hero-copy">
              <h1 className="routes-line routes-line-script">Find your Way,</h1>
              <h2 className="routes-line routes-line-bold">Love Your Stay</h2>
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={`routes-middle-scene ${heroIntroPhase === 'enter' ? 'routes-middle-scene-hidden' : 'routes-middle-scene-visible'}`}
        aria-label="Travel routes highlights"
        style={{ '--routes-middle-image': `url(${TravelRoutesWarmSkyBg})` }}
      >
        <div className="routes-middle-glow routes-middle-glow-left" aria-hidden="true" />
        <div className="routes-middle-glow routes-middle-glow-right" aria-hidden="true" />
        <div className="routes-middle-gridline" aria-hidden="true" />
        <div className="routes-middle-ocean" aria-hidden="true">
          <img src={TravelRoutesOceanLayer} alt="" />
        </div>
        <img
          className="routes-middle-balloon"
          src={TravelRoutesBalloonOverlay}
          alt=""
          aria-hidden="true"
        />
        <img
          className="routes-middle-cruise"
          src={TravelRoutesCruiseOverlay}
          alt=""
          aria-hidden="true"
        />
        <img
          className="routes-middle-plane"
          src={TravelRoutesPlaneOverlay}
          alt=""
          aria-hidden="true"
        />

        <main className="routes-content">
          <section className="routes-section">
            <h3>Beauty Places</h3>

            <div className="beauty-places-grid">
              {beautyPlaces.map((place) => (
                <button
                  key={place.id}
                  type="button"
                  className={`beauty-place-card beauty-place-card-${place.type}`}
                  onClick={() => setActiveItem(place)}
                >
                  {place.type === 'promo' ? (
                    <>
                      <div className="beauty-promo-copy">
                        <span>{place.title}</span>
                        <p>{place.description}</p>
                        <strong>
                          {place.cta} <FontAwesomeIcon icon={faArrowRight} />
                        </strong>
                      </div>
                      <img src={place.image} alt={place.title} />
                    </>
                  ) : (
                    <>
                      <div className="beauty-place-image">
                        <img src={place.image} alt={place.title} />
                        <span className="beauty-place-favorite">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                      </div>

                      <div className="beauty-place-body">
                        <h4>{place.title}</h4>

                        <div className="beauty-place-stats" aria-hidden="true">
                          {place.stats.map((stat, index) => (
                            <span key={stat}>
                              <FontAwesomeIcon
                                icon={
                                  index === 0
                                    ? faLocationDot
                                    : index === 1
                                      ? faHotel
                                      : index === 2
                                        ? faMapLocationDot
                                        : faUmbrellaBeach
                                }
                              />
                              {stat}
                            </span>
                          ))}
                        </div>

                        <p>{place.detailsTitle}</p>
                        <div className="beauty-place-meta">
                          <span>{place.duration}</span>
                          <strong>{place.price}</strong>
                        </div>
                      </div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section className="routes-section">
            <h3>Beauty Attractions</h3>

            <div className="beauty-attractions-grid">
              {beautyAttractions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="beauty-attraction-card"
                  onClick={() => setActiveItem(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="beauty-attraction-overlay" />
                  <div className="beauty-attraction-copy">
                    <span>{item.eyebrow}</span>
                    <strong>{item.title}</strong>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="routes-section">
            <h3>Trending Destinations</h3>

            <div className="trending-destinations-grid">
              {trendingDestinations.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="trending-card"
                  onClick={() => setActiveTrendingItem(item)}
                >
                  <div className="trending-card-shell">
                    <div className="trending-card-front">
                      <div className="trending-card-seal">
                        <span>FlyVelers</span>
                        <strong>{item.stamp}</strong>
                      </div>
                      <div className="trending-card-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="trending-card-caption">
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>
      </section>

      <div className={`routes-footer-shell ${heroIntroPhase === 'enter' ? 'routes-footer-shell-hidden' : 'routes-footer-shell-visible'}`}>
        <Footer />
      </div>

      {activeItem ? (
        <div
          className="route-dialog-backdrop"
          onClick={() => setActiveItem(null)}
          role="presentation"
        >
          <div
            className="route-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="route-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="route-dialog-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close details"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="route-dialog-media">
              <img src={activeItem.image} alt={activeItem.title} />
            </div>

            <div className="route-dialog-body">
              <span className="route-dialog-tag">
                <FontAwesomeIcon icon={faCalendarDays} />
                Travel route details
              </span>
              <h4 id="route-dialog-title">{activeItem.title}</h4>
              <p>{activeItem.popup}</p>
              {'price' in activeItem ? (
                <div className="route-dialog-meta">
                  <span>{activeItem.duration}</span>
                  <strong>{activeItem.price}</strong>
                </div>
              ) : null}
              <button
                type="button"
                className="route-dialog-action"
                onClick={() => setActiveItem(null)}
              >
                Continue exploring
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {activeTrendingItem ? (
        <div
          className="route-dialog-backdrop route-dialog-backdrop-ticket"
          onClick={() => setActiveTrendingItem(null)}
          role="presentation"
        >
          <div
            className="trending-ticket-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trending-ticket-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="route-dialog-close"
              onClick={() => setActiveTrendingItem(null)}
              aria-label="Close ticket details"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="trending-ticket-shell">
              <div className="trending-ticket-front">
                <div className="trending-card-seal">
                  <span>FlyVelers</span>
                  <strong>{activeTrendingItem.stamp}</strong>
                </div>
                <div className="trending-card-image">
                  <img src={activeTrendingItem.image} alt={activeTrendingItem.title} />
                </div>
                <div className="trending-card-caption">
                  <span>{activeTrendingItem.title}</span>
                </div>
              </div>

              <div className="trending-ticket-inside">
                <div className="trending-card-ticket">
                  <span className="trending-card-route">{activeTrendingItem.route}</span>
                  <h4 id="trending-ticket-title">{activeTrendingItem.title}</h4>
                  <p>{activeTrendingItem.popup}</p>
                  <div className="trending-card-meta">
                    <span>{activeTrendingItem.season}</span>
                    <strong>{activeTrendingItem.stamp}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Routes;
