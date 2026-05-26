import React, { useState } from "react";
import "./services.css";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import auroras from "../../assets/auroras.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const servicePlans = [
  {
    id: "basic",
    title: "Plan Basic",
    monthly: "60$ Monthly",
    price: "300$",
    per: "Per person (short trips, 3-5 days)",
    cardClass: "",
    iconWrapClass: "fondo-icon",
    iconClass: "icon-bg",
    includeLabel: "Services Include:",
    services: [
      "Round-trip economy airfare (regional destinations)",
      "3-4 star hotel accommodation",
      "Airport transfers (shuttle or shared transport)",
      "Basic insurance (medical + luggage coverage)",
      "One guided city tour or excursion",
    ],
    details: {
      idealFor: "Weekend escapes, first-time travelers and short regional getaways.",
      planning: "Simple itinerary with flight, hotel, transport and one curated activity.",
      support: "Standard booking assistance before departure.",
      extras: ["Short stays", "Shared transfers", "Basic coverage"],
    },
  },
  {
    id: "standard",
    title: "Plan Standard",
    monthly: "100$ Monthly",
    price: "800$",
    per: "Per person (medium trips, 5-7 days)",
    cardClass: "highlight",
    iconWrapClass: "fondo-icon-standard",
    iconClass: "icon-bg-standard",
    includeLabel: "Services Included:",
    services: [
      "Round-trip economy airfare (international destinations)",
      "4-5 star hotel accommodation with breakfast included",
      "Private airport transfers",
      "Comprehensive travel insurance",
      "Two guided tours or excursions",
      "24/7 customer support during the trip",
    ],
    details: {
      idealFor: "Balanced international trips with more comfort and stronger support.",
      planning: "A richer itinerary with private transfers, breakfast and two experiences.",
      support: "24/7 trip support while traveling.",
      extras: ["Recommended", "Private transfers", "Trip cancellation"],
    },
  },
  {
    id: "premium",
    title: "Plan Premium",
    monthly: "Premium Monthly",
    price: "2000$",
    per: "Per person (luxury trips, 7-10 days)",
    cardClass: "",
    iconWrapClass: "fondo-icon-premiun",
    iconClass: "icon-bg-premiun",
    includeLabel: "Services Included:",
    services: [
      "Round-trip business class airfare",
      "5-star luxury resort or boutique hotel",
      "Private airport transfers with premium vehicles",
      "VIP travel insurance",
      "Multiple guided tours and exclusive experiences",
      "Concierge service for reservations and special requests",
      "Personalized itinerary planning with flexible options",
    ],
    details: {
      idealFor: "Luxury travel, honeymoon-style escapes and fully personalized journeys.",
      planning: "Flexible premium itinerary with concierge handling reservations and requests.",
      support: "Priority assistance plus VIP insurance protection.",
      extras: ["Business class", "Concierge", "Exclusive experiences"],
    },
  },
];

const Services = () => {
  const [activePlan, setActivePlan] = useState(null);

  const togglePlan = (planId) => {
    setActivePlan((currentPlan) => (currentPlan === planId ? null : planId));
  };

  return (
    <div className="services-container">
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

      <section className="services-section">
        <div className="bg-shape1"></div>
        <div className="cards-wrapper">
          {servicePlans.map((plan) => {
            const isActive = activePlan === plan.id;

            return (
              <article
                key={plan.id}
                className={`service-card ${plan.cardClass} ${isActive ? "is-active" : ""}`}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => togglePlan(plan.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    togglePlan(plan.id);
                  }
                }}
              >
                <div className="service-card-main">
                  <div className={plan.iconWrapClass}>
                    <div className={plan.iconClass}>
                      <FontAwesomeIcon icon={faCheck} className="icon-check" />
                    </div>
                  </div>
                  <h3 className="tittle">{plan.title}</h3>
                  <p className="monthly">{plan.monthly}</p>

                  <h2>{plan.price}</h2>
                  <p className="per">{plan.per}</p>
                  <div className="separador"></div>
                  <p className="SerInclude">{plan.includeLabel}</p>
                  <ul>
                    {plan.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>

                <div className="subscription-details" aria-hidden={!isActive}>
                  <span className="details-kicker">Subscription details</span>
                  <p>{plan.details.idealFor}</p>
                  <p>{plan.details.planning}</p>
                  <p>{plan.details.support}</p>
                  <div className="details-tags">
                    {plan.details.extras.map((extra) => (
                      <span key={extra}>{extra}</span>
                    ))}
                  </div>
                </div>

                <span className="card-action">
                  {isActive ? "Tap to close" : "Tap for details"}
                </span>
              </article>
            );
          })}
          <div className="bg-shape2"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
