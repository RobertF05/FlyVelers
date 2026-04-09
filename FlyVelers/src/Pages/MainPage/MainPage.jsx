import React from 'react';
import './MainPage.css';
import Navbar from '../../components/navbar.jsx';

// Images
import maldivas from '../../assets/maldivas.png';
import peru from '../../assets/peru.png';
import guatemala from '../../assets/guatemala.png';
import chile from '../../assets/chile.png';
import phone from '../../assets/celular-logo.png';
import FondoPeru from '../../assets/fondo peru.jpg'
import FondoChile from '../../assets/fondo chile.jpg'
import FondoGuatemala from '../../assets/fondo guatemala.jpg'
import divider from '../../assets/bottom-shape.webp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSistrix } from '@fortawesome/free-brands-svg-icons'

const MainPage = () => {
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

        <div className="cards">

          <div className="card" style={{ backgroundImage: `url(${peru}),url(${FondoPeru})` }}>
            <div className="card-overlay" />
            <h3 className='Peru-tittle'>PERU</h3>
          </div>

          <div className="card" style={{ backgroundImage: `url(${guatemala}), url(${FondoGuatemala})` }}>
            <div className="card-overlay purple" />
            <h3 className='guatemala-tittle'>GUATEMALA</h3>
          </div>

          <div className="card" style={{ backgroundImage: `url(${chile}) , url(${FondoChile})` }}>
            <div className="card-overlay dark" />
            <h3 className='chile-tittle'>CHILE</h3>
          </div>
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

    </div>
  );
};

export default MainPage;
