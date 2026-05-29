import React, { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";

import maldivas from "../../assets/maldivas.png";
import phone from "../../assets/celular-logo.png";
import netherlands from "../../assets/netherlands.jpg";
import hongkong from "../../assets/hongkong.jpg";
import singapore from "../../assets/singapore.jpg";
import touristAttractionsBg from "../../assets/tourist-attractions-ai-bg.png";
import guatemala2 from "../../assets/Mejor Guatemala.png";
import chile2 from "../../assets/chilemejor.png";
import peru3 from "../../assets/peru3.png";
import cappadocia from "../../assets/Cappadocia.jpg";
import petra from "../../assets/Petra.jpg";
import santorini from "../../assets/Santorini.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";

const MainPage = () => {
  const featuredAttractions = [
    {
      id: "machu-picchu",
      title: "Machu Picchu",
      country: "Peru",
      location: "Cusco Region",
      image: peru3,
      overview:
        "A legendary Inca sanctuary set high in the Andes, ideal for travelers seeking archaeology, mountain scenery and immersive cultural routes.",
      highlights: [
        "Citadel circuits",
        "Andean rail access",
        "Sacred Valley extensions",
      ],
      flyvelersHelp:
        "FlyVelers can bundle flights, Cusco transfers, train coordination, altitude-aware pacing and premium lodging into one smoother itinerary.",
    },
    {
      id: "antigua-guatemala",
      title: "Antigua Guatemala",
      country: "Guatemala",
      location: "Arco de Santa Catalina",
      image: guatemala2,
      overview:
        "A refined colonial city framed by volcanoes, known for walkable streets, artisan culture, architecture and easy gateway access to Guatemala's highlands.",
      highlights: [
        "Colonial landmarks",
        "Volcano viewpoints",
        "Boutique stays",
      ],
      flyvelersHelp:
        "FlyVelers can organize airport pickups, curated hotel options, guided city experiences and add-on volcano or lake extensions with less friction.",
    },
    {
      id: "torres-del-paine",
      title: "Torres del Paine",
      country: "Chile",
      location: "Patagonia",
      image: chile2,
      overview:
        "One of Patagonia's defining landscapes, with sharp granite peaks, glacial lakes and cinematic wilderness for expedition-style travel.",
      highlights: [
        "National park access",
        "Patagonian lake views",
        "Adventure itineraries",
      ],
      flyvelersHelp:
        "FlyVelers can coordinate the long-haul route, regional transfers, lodge selections and timing between Puerto Natales and the park.",
    },
    {
      id: "amsterdam-canals",
      title: "Amsterdam Canals",
      country: "Netherlands",
      location: "Amsterdam",
      image: netherlands,
      overview:
        "The canal belt delivers timeless Dutch architecture, museum culture and polished urban travel with effortless walkability.",
      highlights: ["Canal cruises", "Historic neighborhoods", "Museum district"],
      flyvelersHelp:
        "FlyVelers can simplify flight timing, central hotel selection and city-pass planning so short European stays feel efficient instead of rushed.",
    },
    {
      id: "victoria-peak",
      title: "Victoria Peak",
      country: "Hong Kong",
      location: "The Peak",
      image: hongkong,
      overview:
        "An iconic skyline panorama over Victoria Harbour, perfect for travelers who want fast access to luxury hotels, dining and urban landmarks.",
      highlights: ["Skyline views", "Peak Tram access", "Harbour-side evenings"],
      flyvelersHelp:
        "FlyVelers can align premium flights, efficient airport transfers and centrally located stays to make a dense city feel easy to navigate.",
    },
    {
      id: "gardens-by-the-bay",
      title: "Gardens by the Bay",
      country: "Singapore",
      location: "Supertree Grove",
      image: singapore,
      overview:
        "A signature Singapore attraction blending futuristic design, curated gardens and waterfront city access in a compact premium experience.",
      highlights: ["Supertree Grove", "Marina Bay access", "Night light shows"],
      flyvelersHelp:
        "FlyVelers can pair this stop with marina-area hotels, dining reservations and a broader Singapore itinerary built around convenience.",
    },
    {
      id: "petra",
      title: "Petra Treasury",
      country: "Jordan",
      location: "Petra",
      image: petra,
      overview:
        "A world-renowned archaeological wonder carved into sandstone cliffs, suited to cultural travelers looking for a landmark-led itinerary.",
      highlights: ["Treasury approach", "Ancient city trails", "Desert heritage"],
      flyvelersHelp:
        "FlyVelers can help structure the route through Amman, Petra and desert extensions while keeping transport and overnight stops coherent.",
    },
    {
      id: "santorini",
      title: "Santorini",
      country: "Greece",
      location: "Cyclades",
      image: santorini,
      overview:
        "Known for whitewashed cliffside architecture, caldera views and sunset-driven stays, Santorini works especially well for polished leisure travel.",
      highlights: ["Caldera viewpoints", "Cliffside hotels", "Sunset dining"],
      flyvelersHelp:
        "FlyVelers can coordinate island transfers, hotel categories and route sequencing so the Santorini leg feels elevated and low-stress.",
    },
    {
      id: "cappadocia",
      title: "Cappadocia",
      country: "Türkiye",
      location: "Ürgüp Region",
      image: cappadocia,
      overview:
        "Famous for sunrise balloon flights, surreal rock formations and cave-style hospitality, making it a strong bucket-list destination.",
      highlights: ["Balloon flights", "Rock valleys", "Cave hotel stays"],
      flyvelersHelp:
        "FlyVelers can help time regional flights, sunrise activity reservations and accommodation logistics around weather-sensitive experiences.",
    },
  ];

  const attractions = [
    {
      title: "PERU",
      image: peru3,
      tag: "Sacred Landscapes",
      description:
        "Ancient routes, dramatic peaks and immersive culture around every turn.",
      featuredId: "machu-picchu",
    },
    {
      title: "GUATEMALA",
      image: guatemala2,
      tag: "Colonial Energy",
      description:
        "Colorful plazas, artisan traditions and architecture with deep local identity.",
      featuredId: "antigua-guatemala",
    },
    {
      title: "CHILE",
      image: chile2,
      tag: "Southern Horizons",
      description:
        "Patagonian lakes, powerful mountain ranges and cinematic natural scenery.",
      featuredId: "torres-del-paine",
    },
    {
      title: "NETHERLANDS",
      image: netherlands,
      tag: "Canal Escapes",
      description:
        "Refined city life, timeless streets and quiet waterways with European charm.",
      featuredId: "amsterdam-canals",
    },
    {
      title: "HONG KONG",
      image: hongkong,
      tag: "Skyline Motion",
      description:
        "Dense urban rhythm, harbor lights and world-class food in a vertical city.",
      featuredId: "victoria-peak",
    },
    {
      title: "SINGAPORE",
      image: singapore,
      tag: "Future Nature",
      description:
        "Gardens, waterfront architecture and a polished mix of modern Asian luxury.",
      featuredId: "gardens-by-the-bay",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const [selectedFeaturedIndex, setSelectedFeaturedIndex] = useState(0);
  const [isFeaturedDetailOpen, setIsFeaturedDetailOpen] = useState(false);
  const [isMobileFeaturedView, setIsMobileFeaturedView] = useState(false);
  const ctaRef = useRef(null);
  const [showCTA, setShowCTA] = useState(false);

  const selectedFeaturedAttraction = featuredAttractions[selectedFeaturedIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % attractions.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [attractions.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const syncMobileView = (event) => {
      setIsMobileFeaturedView(event.matches);
      if (!event.matches) {
        setIsFeaturedDetailOpen(false);
      }
    };

    syncMobileView(mediaQuery);
    mediaQuery.addEventListener("change", syncMobileView);

    return () => mediaQuery.removeEventListener("change", syncMobileView);
  }, []);

  useEffect(() => {
    if (!isFeaturedOpen) {
      document.body.style.overflow = "";
      setIsFeaturedDetailOpen(false);
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsFeaturedOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isFeaturedOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCTA(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + attractions.length) % attractions.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % attractions.length);
  };

  const openFeaturedAttractions = (
    featuredId = featuredAttractions[0].id,
    directToDetail = false,
  ) => {
    const nextIndex = featuredAttractions.findIndex(
      (attraction) => attraction.id === featuredId,
    );
    setSelectedFeaturedIndex(nextIndex >= 0 ? nextIndex : 0);
    setIsFeaturedOpen(true);
    setIsFeaturedDetailOpen(isMobileFeaturedView && directToDetail);
  };

  const handleFeaturedSelection = (index) => {
    setSelectedFeaturedIndex(index);
    if (isMobileFeaturedView) {
      setIsFeaturedDetailOpen(true);
    }
  };

  return (
    <div className="main-container">
      <section className="hero" style={{ backgroundImage: `url(${maldivas})` }}>
        <Navbar />

        <div className="hero-overlay">
          <div className="hero-texts">
            <p className="hero-kicker">Curated escapes by FlyVelers</p>
            <h2 className="hero-subtitle">
              <span>Find your Way,</span>
            </h2>
            <h1 className="hero-title">
              <span>Love Your Stay</span>
            </h1>
          </div>

          <div className="search-container" role="presentation">
            <div className="search-shell">
              <div className="search-intro">
                <span className="search-badge">Luxury Travel Planning</span>
                <p className="search-copy">
                  Elevate your journey above the expected, exploring the world's finest
                  destinations with the seamless grace of FlyVelers.
                </p>
              </div>

              <div className="search-fields">
                <div className="search-field">
                  <span className="search-label">Destination style</span>
                  <strong>Beachfront, culture, private comfort</strong>
                </div>

                <div className="search-divider" aria-hidden="true" />

                <div className="search-field">
                  <span className="search-label">Experience</span>
                  <strong>Tailored routes and premium stays</strong>
                </div>

                <button
                  type="button"
                  className="explore-btn"
                  onClick={() => openFeaturedAttractions()}
                >
                  Explore <FontAwesomeIcon icon={faSistrix} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="destinations"
        style={{ backgroundImage: `url(${touristAttractionsBg})` }}
      >
        <div className="destinations-header">
          <div>
            <span className="section-chip">Scenic highlights</span>
            <h2>Tourist Attractions</h2>
          </div>
          <p>
            Explore all kinds of flavors, crafts, and unparalleled experiences, while
            contributing to the preservation of traditions and cultures from around the
            world.
          </p>
        </div>

        <div className="attractions-carousel">
          <button
            type="button"
            className="carousel-arrow left"
            onClick={goToPreviousSlide}
            aria-label="Previous attraction"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {attractions.map((attraction, index) => (
                <article
                  key={attraction.title}
                  className="carousel-card"
                  style={{ backgroundImage: `url(${attraction.image})` }}
                >
                  <div className="card-overlay" />
                  <div className="carousel-card-frame" />
                  <div className="carousel-card-content">
                    <div className="carousel-card-top">
                      <span className="carousel-tag">{attraction.tag}</span>
                      <span className="carousel-count">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(attractions.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="carousel-card-body">
                      <div className="carousel-title-wrap">
                        <span className="carousel-kicker">
                          <FontAwesomeIcon icon={faLocationDot} />
                          Signature destination
                        </span>
                        <h3>{attraction.title}</h3>
                      </div>

                      <div className="carousel-card-bottom">
                        <p>{attraction.description}</p>
                        <button
                          type="button"
                          className="carousel-link"
                          onClick={() => openFeaturedAttractions(attraction.featuredId, true)}
                        >
                          View destination <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>

                    <div className="carousel-progress" aria-hidden="true">
                      <span
                        className="carousel-progress-bar"
                        style={{
                          width: `${((currentSlide + 1) / attractions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow right"
            onClick={goToNextSlide}
            aria-label="Next attraction"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="carousel-dots" aria-label="Carousel navigation">
          {attractions.map((attraction, index) => (
            <button
              key={attraction.title}
              type="button"
              className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show ${attraction.title}`}
            />
          ))}
        </div>
      </section>

      <section className={`cta ${showCTA ? "show-cta" : ""}`} ref={ctaRef}>
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Embark on a Global Adventure with Us?</h2>
            <p>
              Experience hassle-free travel on our reliable platform, where transparency
              and satisfaction come first.
            </p>
            <a
              href="https://www.tiktok.com/@fly.velers/video/7626001455081688340?_r=1&_t=ZS-96j8bloEixB"
              target="_blank"
              rel="noopener noreferrer"
              className="tiktok-ref"
            >
              Watch our TikTok
            </a>
          </div>

          <div className="cta-image">
            <img src={phone} alt="App Preview" />
          </div>
        </div>
      </section>

      {isFeaturedOpen && (
        <div
          className="featured-modal-backdrop"
          onClick={() => setIsFeaturedOpen(false)}
          role="presentation"
        >
          <section
            className="featured-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="featured-attractions-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="featured-modal-header">
              <div>
                <span className="featured-modal-chip">
                  <FontAwesomeIcon icon={faStar} />
                  Featured tourist attractions
                </span>
                <h2 id="featured-attractions-title">
                  Explore featured destinations with FlyVelers
                </h2>
                <p>
                  Browse standout places, compare travel styles and see how FlyVelers
                  can make each route easier to plan.
                </p>
              </div>

              <button
                type="button"
                className="featured-close"
                onClick={() => setIsFeaturedOpen(false)}
                aria-label="Close featured attractions"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="featured-modal-layout">
              <div className="featured-list" role="tablist" aria-label="Featured attractions list">
                {featuredAttractions.map((attraction, index) => (
                  <button
                    key={attraction.id}
                    type="button"
                    className={`featured-list-item ${index === selectedFeaturedIndex ? "active" : ""}`}
                    onClick={() => handleFeaturedSelection(index)}
                    role="tab"
                    aria-selected={index === selectedFeaturedIndex}
                  >
                    <span className="featured-list-country">{attraction.country}</span>
                    <strong>{attraction.title}</strong>
                    <small>{attraction.location}</small>
                  </button>
                ))}
              </div>

              {!isMobileFeaturedView && (
                <article className="featured-panel">
                  <div className="featured-panel-hero">
                    <img src={selectedFeaturedAttraction.image} alt={selectedFeaturedAttraction.title} />
                    <div className="featured-panel-overlay" />
                    <div className="featured-panel-copy">
                      <span className="featured-panel-badge">
                        {selectedFeaturedAttraction.country}
                      </span>
                      <h3>{selectedFeaturedAttraction.title}</h3>
                      <p>{selectedFeaturedAttraction.location}</p>
                    </div>
                  </div>

                  <div className="featured-panel-body">
                    <div className="featured-panel-section">
                      <span className="featured-panel-label">Why it stands out</span>
                      <p>{selectedFeaturedAttraction.overview}</p>
                    </div>

                    <div className="featured-panel-section">
                      <span className="featured-panel-label">How FlyVelers helps</span>
                      <p>{selectedFeaturedAttraction.flyvelersHelp}</p>
                    </div>

                    <div className="featured-highlights">
                      {selectedFeaturedAttraction.highlights.map((highlight) => (
                        <span key={highlight} className="featured-highlight-pill">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )}
            </div>
          </section>
        </div>
      )}

      {isFeaturedOpen && isMobileFeaturedView && isFeaturedDetailOpen && (
        <div
          className="featured-detail-backdrop"
          onClick={() => setIsFeaturedDetailOpen(false)}
          role="presentation"
        >
          <section
            className="featured-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="featured-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="featured-detail-close"
              onClick={() => setIsFeaturedDetailOpen(false)}
              aria-label="Close destination details"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <article className="featured-panel featured-panel-mobile">
              <div className="featured-panel-hero">
                <img src={selectedFeaturedAttraction.image} alt={selectedFeaturedAttraction.title} />
                <div className="featured-panel-overlay" />
                <div className="featured-panel-copy">
                  <span className="featured-panel-badge">
                    {selectedFeaturedAttraction.country}
                  </span>
                  <h3 id="featured-detail-title">{selectedFeaturedAttraction.title}</h3>
                  <p>{selectedFeaturedAttraction.location}</p>
                </div>
              </div>

              <div className="featured-panel-body">
                <div className="featured-panel-section">
                  <span className="featured-panel-label">Why it stands out</span>
                  <p>{selectedFeaturedAttraction.overview}</p>
                </div>

                <div className="featured-panel-section">
                  <span className="featured-panel-label">How FlyVelers helps</span>
                  <p>{selectedFeaturedAttraction.flyvelersHelp}</p>
                </div>

                <div className="featured-highlights">
                  {selectedFeaturedAttraction.highlights.map((highlight) => (
                    <span key={highlight} className="featured-highlight-pill">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MainPage;
