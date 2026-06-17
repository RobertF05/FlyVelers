import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./services.css";
import Footer from "../../components/footer.jsx";
import auroras from "../../assets/auroras.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext.jsx";

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

const planRank = {
  basic: 1,
  standard: 2,
  premium: 3,
};

const Services = () => {
  const navigate = useNavigate();
  const {
    addPurchaseRecord,
    isAuthenticated,
    setSubscriptionPlan,
    subscriptionPlan,
  } = useCart();
  const [activePlan, setActivePlan] = useState(null);
  const [checkoutPlan, setCheckoutPlan] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const togglePlan = (planId) => {
    setActivePlan((currentPlan) => (currentPlan === planId ? null : planId));
  };

  const getPlanActionLabel = (plan) => {
    if (subscriptionPlan === plan.id) {
      return "Current plan";
    }

    if (!subscriptionPlan) {
      return `Buy ${plan.title}`;
    }

    return planRank[plan.id] < planRank[subscriptionPlan]
      ? `Downgrade to ${plan.title}`
      : `Upgrade to ${plan.title}`;
  };

  const handlePlanPurchase = (event, plan) => {
    event.stopPropagation();

    if (!isAuthenticated()) {
      navigate("/login");
      return;
    }

    setCheckoutPlan(plan);
  };

  const handleSubscriptionCheckout = (event) => {
    event.preventDefault();
    addPurchaseRecord({
      type: "subscription",
      title: checkoutPlan.title,
      total: checkoutPlan.price,
      planId: checkoutPlan.id,
      items: [
        {
          id: checkoutPlan.id,
          title: checkoutPlan.title,
          price: checkoutPlan.price,
          quantity: 1,
          summary: checkoutPlan.per,
        },
      ],
    });
    setSubscriptionPlan(checkoutPlan.id);
    setPaymentSuccess(true);

    setTimeout(() => {
      setCheckoutPlan(null);
      setPaymentSuccess(false);
    }, 1200);
  };

  return (
    <div className="services-container">
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${auroras})` }}
      >
        <div className="hero-overlay">
          <div className="services-hero-intro">
            <span className="services-hero-chip">Travel services</span>
            <h2>Choose the level of planning, comfort and support that fits your next journey.</h2>
            <p>
              From short curated escapes to concierge-level luxury itineraries,
              FlyVelers organizes each trip with clearer structure, better
              support and smoother travel coordination.
            </p>
          </div>

          <div className="hero-texts">
            <h2 className="hero-subtitle">Find your Way,</h2>
            <h1 className="hero-title">Love Your Stay</h1>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="bg-shape1"></div>
        <div className="services-section-intro">
          <span className="services-section-chip">See below our subscription plans</span>
          <span className="services-section-arrow" aria-hidden="true">↓</span>
          <p>Compare the options and open any card to inspect what each level includes.</p>
        </div>
        <div className="cards-wrapper">
          {servicePlans.map((plan) => {
            const isActive = activePlan === plan.id;
            const isCurrentPlan = subscriptionPlan === plan.id;

            return (
              <article
                key={plan.id}
                className={`service-card ${plan.cardClass} ${isActive ? "is-active" : ""} ${
                  isCurrentPlan ? "has-current-plan" : ""
                }`}
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
                  {isCurrentPlan ? <span className="current-plan-badge">Current plan</span> : null}
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
                  <button
                    type="button"
                    className="plan-purchase-btn"
                    disabled={isCurrentPlan}
                    onClick={(event) => handlePlanPurchase(event, plan)}
                    onKeyDown={(event) => event.stopPropagation()}
                  >
                    {getPlanActionLabel(plan)}
                  </button>
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

      {checkoutPlan ? (
        <div
          className="service-payment-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-payment-title"
          onClick={() => setCheckoutPlan(null)}
        >
          <form
            className="service-payment-modal"
            onSubmit={handleSubscriptionCheckout}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="service-payment-close"
              onClick={() => setCheckoutPlan(null)}
              aria-label="Close payment form"
            >
              x
            </button>
            <span>Subscription checkout</span>
            <h2 id="service-payment-title">{checkoutPlan.title}</h2>
            <p>{checkoutPlan.price} - payment details are only used for this demo and are not saved.</p>

            <div className="service-payment-grid">
              <label>
                Cardholder name
                <input type="text" placeholder="Name on card" required />
              </label>
              <label>
                Card number
                <input
                  type="text"
                  inputMode="numeric"
                  minLength="13"
                  maxLength="19"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </label>
              <label>
                Expiration date
                <input type="month" required />
              </label>
              <label>
                CVV
                <input
                  type="password"
                  inputMode="numeric"
                  minLength="3"
                  maxLength="4"
                  placeholder="123"
                  required
                />
              </label>
            </div>

            <button type="submit" className="service-payment-submit">
              {paymentSuccess ? "Subscription active" : "Confirm subscription"}
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Services;
