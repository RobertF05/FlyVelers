import React from "react";
import "./services.css";
import Navbar from "../../components/navbar.jsx";
import auroras from "../../assets/auroras.png";

const Services = () => {
  return (
    <div className="services-container">

      {/* HERO */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${auroras})` }}
      >
        <Navbar />

        <div className="hero-overlay">
          <div className="hero-texts">
            <h2 className="hero-subtitle">Find your Way,</h2>
            <h1 className="hero-title">Love Your Stay</h1>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="services-section">
        <div className="cards-wrapper">

          {/* BASIC */}
          <div className="service-card">
            <div className="icon blue"></div>
            <h3>Plan Basic</h3>
            <p className="duration">3–5 Months</p>

            <h2>300$</h2>
            <p className="per">Per person (3–5 days)</p>

            <ul>
              <li>Economy airfare (regional)</li>
              <li>3–4 star hotel</li>
              <li>Shared transfers</li>
              <li>Basic insurance</li>
              <li>1 tour</li>
            </ul>
          </div>

          {/* STANDARD */}
          <div className="service-card highlight">
            <div className="icon green"></div>
            <h3>Plan Standard</h3>
            <p className="duration">6 Months</p>

            <h2>800$</h2>
            <p className="per">Per person (5–7 days)</p>

            <ul>
              <li>International flights</li>
              <li>4–5 star hotel</li>
              <li>Private transfers</li>
              <li>Full insurance</li>
              <li>2 tours</li>
              <li>24/7 support</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="service-card">
            <div className="icon yellow"></div>
            <h3>Plan Premium</h3>
            <p className="duration">1 Year</p>

            <h2>2000$</h2>
            <p className="per">Per person (7–10 days)</p>

            <ul>
              <li>Business class flights</li>
              <li>Luxury hotel</li>
              <li>VIP transfers</li>
              <li>Premium insurance</li>
              <li>Exclusive tours</li>
              <li>Concierge service</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;