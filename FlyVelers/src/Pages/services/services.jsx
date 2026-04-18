import React from "react";
import "./services.css";
import Navbar from "../../components/navbar.jsx";
import auroras from "../../assets/auroras.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
        <div className="bg-shape1"></div>
        <div className="cards-wrapper">
          {/* BASIC */}
          <div className="service-card">
            <div className="fondo-icon">
              <div className="icon-bg">
                <FontAwesomeIcon icon={faCheck} className="icon-check" />
              </div>
            </div>
            <h3 className="tittle">Plan Basic</h3>
            <p className="monthly">60$ Monthly</p>

            <h2>300$</h2>
            <p className="per">Per person (short trips, 3–5 days)</p>
            <div className="separador"></div>
            <p className="SerInclude">Services Include:</p>
            <ul>
              <li>Round-trip economy airfare (regional destinatios) </li>
              <li>3–4 star hotel accommodation</li>
              <li>Airport transfers (shuttle or shared transport)</li>
              <li>Basic insurance (medical + luggage covarage)</li>
              <li>one guided city tour or excursion</li>
            </ul>
          </div>

          {/* STANDARD */}
          <div className="service-card highlight">
            <div className="fondo-icon-standard">
              <div className="icon-bg-standard">
                <FontAwesomeIcon icon={faCheck} className="icon-check" />
              </div>
            </div>
            <h3 className="tittle">Plan Standard</h3>
            <p className="monthly">100$ Monthly</p>

            <h2>800$</h2>
            <p className="per">Per person (medium trips, 5–7 days)</p>
            <div className="separador"></div>
            <p className="SerInclude">Services Included:</p>
            <ul>
              <li>Round-trip economy airfare (international destinatios)</li>
              <li>4–5 star hotel accommodation with breaksfast included</li>
              <li>Private airport transfers</li>
              <li>Comprehensive travel insurance (medical, luggage, trip cancellation)</li>
              <li>Two guided tours or excursions (cultural + adventure)</li>
              <li>24/7 customer support during the trip</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="service-card">
            <div className="fondo-icon-premiun">
              <div className="icon-bg-premiun">
                <FontAwesomeIcon icon={faCheck} className="icon-check" />
              </div>
            </div>
            <h3 className="tittle">Plan Premium</h3>
            <p className="monthly">Plan Premiun</p>

            <h2>2000$</h2>
            <p className="per">Per person (luxury trips, 7–10 days)</p>
            <div className="separador"></div>
            <p className="SerInclude">Services Included:</p>
            <ul>
              <li>Round-trip business class airfare</li>
              <li>5-Start luxury resort or boutique hotel with half-board or all inclusive options</li>
              <li>Private airports transfers with premiun vehicules</li>
              <li>VIP travel insurance (medical, luggage, cancellation, emergency evacuation)</li>
              <li>Multiple guided tours and exclusive experiencies (wine tasting, private yacht, cultural immersion)</li>
              <li>Concierge service for restaurant reservation and special request</li>
              <li>Personalized itinerary planning with flexible option</li>
            </ul>
          </div>
            <div className="bg-shape2"></div>
        </div>
      </section>
    </div>
  );
};

export default Services;
