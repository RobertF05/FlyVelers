import React, { useEffect, useState } from 'react';
import './MainPage.css';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

// Images
import maldivas from '../../assets/maldivas.png';
import phone from '../../assets/celular-logo.png';
import peru from '../../assets/peru.png';
import guatemala from '../../assets/guatemala.png';
import chile from '../../assets/chile.png';
import netherlands from '../../assets/netherlands.jpg';
import hongkong from '../../assets/hongkong.jpg';
import singapore from '../../assets/singapore.jpg';
import divider from '../../assets/bottom-shape.webp.png'
import guatemala2 from '../../assets/Mejor Guatemala.png'
import chile2 from '../../assets/chilemejor.png'
import peru3 from '../../assets/peru3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSistrix } from '@fortawesome/free-brands-svg-icons'

const MainPage = () => {
  const attractions = [
    {
      title: 'PERU',
      image: peru3,
      tag: 'Sacred Landscapes',
      description: 'Ancient routes, dramatic peaks and immersive culture around every turn.',
    },
    {
      title: 'GUATEMALA',
      image: guatemala2,
      tag: 'Colonial Energy',
      description: 'Colorful plazas, artisan traditions and architecture with deep local identity.',
    },
    {
      title: 'CHILE',
      image: chile2,
      tag: 'Southern Horizons',
      description: 'Patagonian lakes, powerful mountain ranges and cinematic natural scenery.',
    },
    {
      title: 'NETHERLANDS',
      image: netherlands,
      tag: 'Canal Escapes',
      description: 'Refined city life, timeless streets and quiet waterways with European charm.',
    },
    {
      title: 'HONG KONG',
      image: hongkong,
      tag: 'Skyline Motion',
      description: 'Dense urban rhythm, harbor lights and world-class food in a vertical city.',
    },
    {
      title: 'SINGAPORE',
      image: singapore,
      tag: 'Future Nature',
      description: 'Gardens, waterfront architecture and a polished mix of modern Asian luxury.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % attractions.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [attractions.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + attractions.length) % attractions.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % attractions.length);
  };

  return (
    <div className="main-container">

      <section
        className="hero"
        style={{ backgroundImage: `url(${maldivas})` }}
      >
        <Navbar />

        <div className="hero-overlay">
          <div className="hero-texts">
            <h2 className="hero-subtitle">Find your Way,</h2>
            <h1 className="hero-title">Love Your Stay</h1>
          </div>

          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Elevate your journey above the expected, exploring the world's finest destinations with the seamless grace of FlyVelers."
               disabled
               onChange={() => {}}
            />
          </div>

          <button className="explore-btn">Explore <FontAwesomeIcon icon={faSistrix} style={{marginLeft: "10px"}} /> </button>
        </div>

        <img className="divider" src={divider} alt="" aria-hidden="true" />
      </section>

      <section className="destinations">
        <div className="destinations-header">
          <h2>Tourist Attractions</h2>
          <p>
            Explore all kinds of flavors, crafts, and unparalleled experiences, while contributing to the preservation of traditions and cultures from around the world.
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
              {attractions.map((attraction) => (
                <article
                  key={attraction.title}
                  className="carousel-card"
                  style={{ backgroundImage: `url(${attraction.image})` }}
                >
                  <div className="card-overlay" />
                  <div className="carousel-card-top">
                    <span className="carousel-tag">{attraction.tag}</span>
                    <span className="carousel-count">
                      {String(currentSlide + 1).padStart(2, '0')} / {String(attractions.length).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{attraction.title}</h3>

                  <div className="carousel-card-bottom">
                    <p>{attraction.description}</p>
                    <div className="carousel-progress" aria-hidden="true">
                      <span
                        className="carousel-progress-bar"
                        style={{ width: `${((currentSlide + 1) / attractions.length) * 100}%` }}
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
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show ${attraction.title}`}
            />
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Embark on a Global Adventure with Us?</h2>
            <p>
              Experience hassle-free travel on our reliable platform, where transparency and satisfaction come first.
            </p>
          </div>

          <div className="cta-image">
            <img src={phone} alt="App Preview" />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
   
  );
};

export default MainPage;
