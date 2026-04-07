import React from 'react';
import './MainPage.css';

// Images
import maldivas from '../../assets/maldivas.png';
import peru from '../../assets/peru.png';
import guatemala from '../../assets/guatemala.png';
import chile from '../../assets/chile.png';
import phone from '../../assets/celular-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSistrix } from '@fortawesome/free-brands-svg-icons'

const MainPage = () => {
  return (
    <div className="main-container">

      <section
        className="hero"
        style={{ backgroundImage: `url(${maldivas})` }}
      >
        <div className="hero-overlay">
          <h2 className="hero-subtitle">Find your Way,</h2>
          <h1 className="hero-title">Love Your Stay</h1>

          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Elevate your journey above the expected, exploring the world's finest destinations with the seamless grace of FlyVelers."
            />
          </div>

          <button className="explore-btn">Explore <FontAwesomeIcon icon={faSistrix} style={{marginLeft: "10px"}} /> </button>
        </div>
      </section>

      <section className="destinations">
        <div className="destinations-header">
          <h2>Tourist Attractions</h2>
          <p>
            Explore all kinds of flavors, crafts, and unparalleled experiences, while contributing to the preservation of traditions and cultures from around the world.
          </p>
        </div>

        <div className="cards">
          <div className="card" style={{ backgroundImage: `url(${peru})` }}>
            <div className="card-overlay" />
            <h3 className='Peru-tittle'>PERU</h3>
          </div>

          <div className="card" style={{ backgroundImage: `url(${guatemala})` }}>
            <div className="card-overlay purple" />
            <h3 className='guatemala-tittle'>GUATEMALA</h3>
          </div>

          <div className="card" style={{ backgroundImage: `url(${chile})` }}>
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
