import { useEffect, useRef, useState } from 'react';
import './Partners.css';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';
import divider from '../../assets/bottom-shape.webp.png';
import newYork from '../../assets/NewYork.png';
import osloCity from '../../assets/OsloCity.jpg';
import apartment from '../../assets/apartment.png';
import lumiere from '../../assets/Lumiere.png';
import internationalTransit from '../../assets/InternationalTransit.png';
import houstonHotel from '../../assets/HoustonHotel.png';
import vistaCero from '../../assets/VistaCero.png';
import valentinaHotel from '../../assets/ValentinaHotel.jpg';
import cucina from '../../assets/Cucina.png';
import faustino from '../../assets/Faustino.png';
import laCusina from '../../assets/LaCusina.jpg';
import singaporeAirlines from '../../assets/SingaporeAirlines.jpg';
import americanAirlines from '../../assets/AmericanAirlines.png';
import aerolineasArgentinas from '../../assets/AerolineasArgentinas.jpg';

const sections = [
  {
    title: 'Hotels',
    backgroundImage: apartment,
    offers: [
      'Up to 30% off on room rates for direct bookings.',
      'Complimentary breakfast included for stays over 2 nights.',
      'Free late check-out until 12:00 PM on weekends.',
      'Room upgrades to Deluxe or Suite category available on selected properties.',
      'Welcome package with drinks and snacks upon arrival.',
      'Extra 15% discount on spa and wellness services.',
      'Free airport shuttle for stays longer than 4 nights.',
      'Loyalty points doubled when booking through our partner program.',
    ],
    partners: [
      {
        name: 'Houston',
        image: houstonHotel,
        layout: 'small',
        background: '#050505',
        captionBackground: '#050505',
        captionColor: '#f5e4b7',
        category: 'Luxury Hotel',
        location: 'Downtown business district',
        description: 'Boutique hospitality with premium suites, executive lounge access, airport transfer support and elevated concierge service for city stays.',
      },
      {
        name: 'Vista Cero',
        image: vistaCero,
        layout: 'small',
        background: '#043f41',
        captionBackground: '#043f41',
        captionColor: '#d6c38c',
        category: 'Resort Hotel',
        location: 'Seaside escape',
        description: 'A quieter resort-style partner focused on wellness amenities, scenic views, flexible weekend check-out and romantic couple packages.',
      },
      {
        name: 'Valentina',
        image: valentinaHotel,
        layout: 'tall',
        background: '#e8e8e8',
        captionBackground: '#e8e8e8',
        captionColor: '#111111',
        category: 'Signature Stay',
        location: 'Premium urban location',
        description: 'Designed for longer premium stays with upgraded rooms, breakfast inclusion, private transfers and direct booking perks through FlyVelers.',
      },
    ],
  },
  {
    title: 'Restaurants',
    backgroundImage: lumiere,
    offers: [
      'Up to 20% off on total bill at selected partner restaurants.',
      'Complimentary welcome drink for every guest.',
      'Priority reservations even during peak hours.',
      'Special set menus at a discounted price.',
      'Kids eat free on Sundays with a paying adult.',
      'Double loyalty points when dining through our partner program.',
      'Exclusive tasting events for frequent travelers.',
    ],
    partners: [
      {
        name: 'Cucina de Manila',
        image: cucina,
        layout: 'small',
        background: '#fbfbfb',
        captionBackground: '#fbfbfb',
        captionColor: '#111111',
        category: 'Dining Partner',
        location: 'Fine casual experience',
        description: 'Recognized for curated tasting menus, reserved seating support and signature welcome drinks for FlyVelers guests.',
      },
      {
        name: 'Faustino',
        image: faustino,
        layout: 'small',
        background: '#f39a16',
        captionBackground: '#f39a16',
        captionColor: '#2b1b00',
        category: 'Local Favorite',
        location: 'Traditional cuisine hotspot',
        description: 'A strong value partner offering discounted set menus, family-friendly promotions and priority reservations during peak hours.',
      },
      {
        name: 'La Cusina',
        image: laCusina,
        layout: 'tall',
        background: '#fdfdfd',
        captionBackground: '#fdfdfd',
        captionColor: '#111111',
        category: 'Restaurant Partner',
        location: 'Upscale dining district',
        description: 'A premium dining venue with extended reservation benefits, chef-selected menus and exclusive experiences for repeat travelers.',
      },
    ],
  },
  {
    title: 'Airlines',
    backgroundImage: internationalTransit,
    offers: [
      'Up to 25% off on international flight tickets.',
      'Priority boarding included at no extra cost.',
      'Complimentary snacks and drinks on all partner routes.',
      'Free seat upgrades to Premium Economy on selected routes.',
      'VIP lounge access for frequent flyers.',
      'Shorter travel times thanks to optimized direct routes.',
      'Extra baggage allowance of 10 kg for partner bookings.',
    ],
    partners: [
      {
        name: 'Singapore Airline',
        image: singaporeAirlines,
        layout: 'small',
        background: '#1f5aa8',
        captionBackground: '#1f5aa8',
        captionColor: '#ffffff',
        category: 'Airline Partner',
        location: 'Asia network routes',
        description: 'Known for premium service, smoother long-haul connections and selected upgrades for qualifying FlyVelers bookings.',
      },
      {
        name: 'American Airline',
        image: americanAirlines,
        layout: 'small',
        background: '#fbfbfb',
        captionBackground: '#fbfbfb',
        captionColor: '#111111',
        category: 'Flight Partner',
        location: 'North America connections',
        description: 'Offers strong route coverage, extra baggage flexibility and priority boarding on selected international itineraries.',
      },
      {
        name: 'Aerolinea Argentina',
        image: aerolineasArgentinas,
        layout: 'tall',
        background: '#2d7ecb',
        captionBackground: '#2d7ecb',
        captionColor: '#ffffff',
        category: 'Regional Airline',
        location: 'South America network',
        description: 'Ideal for regional travel with dependable direct routes, optimized timings and partner-exclusive add-on benefits.',
      },
    ],
  },
];

function PartnerLogoCard({ partner, isExpanded, onToggle }) {
  return (
    <button
      type="button"
      className={`partner-logo-card ${partner.layout === 'tall' ? 'tall' : 'small'} ${isExpanded ? 'is-expanded' : ''}`}
      style={{ backgroundColor: partner.background }}
      onClick={onToggle}
      aria-expanded={isExpanded}
    >
      <div
        className="partner-logo-image-wrap"
        style={{ backgroundColor: partner.background }}
      >
        <img src={partner.image} alt={partner.name} className="partner-logo-image" />
      </div>
      <div
        className="partner-logo-caption"
        style={{
          backgroundColor: partner.captionBackground ?? partner.background,
          color: partner.captionColor ?? '#111111',
        }}
      >
        {partner.name}
      </div>
      <div className="partner-logo-details">
        <p className="partner-logo-kicker">{partner.category}</p>
        <h4>{partner.name}</h4>
        <p className="partner-logo-location">{partner.location}</p>
        <p className="partner-logo-description">{partner.description}</p>
      </div>
    </button>
  );
}

function PartnerSection({ section, index, activeIndex }) {
  const offset = index - activeIndex;
  const [expandedPartner, setExpandedPartner] = useState(null);
  const positionClass =
    offset === 0
      ? 'is-active'
      : offset > 0
        ? 'is-below'
        : 'is-above';

  useEffect(() => {
    if (index !== activeIndex) {
      setExpandedPartner(null);
    }
  }, [activeIndex, index]);

  return (
    <section
      className={`partner-offer-section ${positionClass}`}
      style={{
        '--stack-offset': offset,
        '--stack-depth': Math.abs(offset),
      }}
      aria-hidden={index !== activeIndex}
    >
      <div
        className="partner-offer-copy"
        style={{ backgroundImage: `url(${section.backgroundImage})` }}
      >
        <div className="partner-offer-overlay" />
        <div className="partner-offer-copy-inner">
          <ul>
            {section.offers.map((offer) => (
              <li key={offer}>{offer}</li>
            ))}
          </ul>

          <h3>{section.title}</h3>
        </div>
      </div>

      <div className="partner-offer-logos">
        {section.partners.map((partner) => (
          <PartnerLogoCard
            key={partner.name}
            partner={partner}
            isExpanded={expandedPartner === partner.name}
            onToggle={() => setExpandedPartner((current) => current === partner.name ? null : partner.name)}
          />
        ))}
      </div>
    </section>
  );
}

function MobilePartnerExperience({
  sections,
  activeSection,
  onSelectSection,
  selectedPartners,
  onSelectPartner,
  expandedOffers,
  onToggleOffers,
}) {
  const currentSection = sections[activeSection];
  const activePartnerName = selectedPartners[currentSection.title] ?? currentSection.partners[0].name;
  const activePartner =
    currentSection.partners.find((partner) => partner.name === activePartnerName) ?? currentSection.partners[0];
  const previewOffers = currentSection.offers.slice(0, 3);
  const hiddenOffers = currentSection.offers.slice(3);
  const isExpanded = Boolean(expandedOffers[currentSection.title]);

  return (
    <div className="partners-mobile-experience">
      <div className="partners-mobile-tabs" aria-label="Partner sections">
        {sections.map((section, index) => (
          <button
            key={section.title}
            type="button"
            className={`partners-mobile-tab ${index === activeSection ? 'active' : ''}`}
            onClick={() => onSelectSection(index)}
            aria-pressed={index === activeSection}
          >
            {section.title}
          </button>
        ))}
      </div>

      <section
        className="partners-mobile-hero-card"
        style={{ backgroundImage: `url(${currentSection.backgroundImage})` }}
      >
        <div className="partners-mobile-hero-overlay" />
        <div className="partners-mobile-hero-copy">
          <span className="partners-mobile-eyebrow">FlyVelers partners</span>
          <h3>{currentSection.title}</h3>
          <p>Partner benefits curated for mobile browsing, with one focused experience at a time.</p>
        </div>
      </section>

      <section className="partners-mobile-offers-card">
        <div className="partners-mobile-card-head">
          <span>Featured benefits</span>
          <button
            type="button"
            className="partners-mobile-toggle"
            onClick={() => onToggleOffers(currentSection.title)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Show all'}
          </button>
        </div>

        <ul className="partners-mobile-offers-list">
          {previewOffers.map((offer) => (
            <li key={offer}>{offer}</li>
          ))}
          {isExpanded
            ? hiddenOffers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))
            : null}
        </ul>
      </section>

      <section className="partners-mobile-partners-card">
        <div className="partners-mobile-card-head">
          <span>Choose a partner</span>
          <strong>{currentSection.partners.length} available</strong>
        </div>

        <div className="partners-mobile-partner-rail" aria-label={`${currentSection.title} partners`}>
          {currentSection.partners.map((partner) => (
            <button
              key={partner.name}
              type="button"
              className={`partners-mobile-partner-chip ${partner.name === activePartner.name ? 'active' : ''}`}
              onClick={() => onSelectPartner(currentSection.title, partner.name)}
            >
              <span
                className="partners-mobile-partner-chip-image"
                style={{ backgroundColor: partner.background }}
              >
                <img src={partner.image} alt={partner.name} />
              </span>
              <span className="partners-mobile-partner-chip-name">{partner.name}</span>
            </button>
          ))}
        </div>
      </section>

      <article className="partners-mobile-spotlight">
        <div className="partners-mobile-spotlight-media" style={{ backgroundColor: activePartner.background }}>
          <img src={activePartner.image} alt={activePartner.name} />
        </div>

        <div className="partners-mobile-spotlight-body">
          <span className="partners-mobile-spotlight-kicker">{activePartner.category}</span>
          <h4>{activePartner.name}</h4>
          <p className="partners-mobile-spotlight-location">{activePartner.location}</p>
          <p className="partners-mobile-spotlight-description">{activePartner.description}</p>
        </div>
      </article>
    </div>
  );
}

const Partners = () => {
  const stackRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [showSectionBackdrop, setShowSectionBackdrop] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [selectedPartners, setSelectedPartners] = useState(() =>
    Object.fromEntries(sections.map((section) => [section.title, section.partners[0].name]))
  );
  const [expandedOffers, setExpandedOffers] = useState(() =>
    Object.fromEntries(sections.map((section) => [section.title, false]))
  );

  useEffect(() => {
    const handleViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleViewport();
    window.addEventListener('resize', handleViewport);

    return () => {
      window.removeEventListener('resize', handleViewport);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowSectionBackdrop(true);
      return undefined;
    }

    const handleScroll = () => {
      const stackNode = stackRef.current;

      if (!stackNode) {
        return;
      }

      const rect = stackNode.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(rect.height - viewportHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const progress = totalScrollable === 0 ? 0 : scrolled / totalScrollable;
      const nextIndex = Math.min(
        sections.length - 1,
        Math.max(0, Math.round(progress * (sections.length - 1)))
      );
      const isInsideSectionZone =
        rect.top <= viewportHeight * 0.72 && rect.bottom >= viewportHeight * 0.3;

      setActiveSection((current) => (current === nextIndex ? current : nextIndex));
      setShowSectionBackdrop(isInsideSectionZone);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile]);

  const handleSelectPartner = (sectionTitle, partnerName) => {
    setSelectedPartners((current) => ({
      ...current,
      [sectionTitle]: partnerName,
    }));
  };

  const handleToggleOffers = (sectionTitle) => {
    setExpandedOffers((current) => ({
      ...current,
      [sectionTitle]: !current[sectionTitle],
    }));
  };

  return (
    <div className="partners-page">
      <section
        className="partners-hero"
        style={{ backgroundImage: `url(${newYork})` }}
      >
        <Navbar activeLabel="Partners" />

        <div className="partners-hero-overlay">
          <div className="partners-hero-texts">
            <h2 className="partners-hero-subtitle">Find your Way,</h2>
            <h1 className="partners-hero-title">Love Your Stay</h1>
          </div>
        </div>

        <img className="partners-divider" src={divider} alt="" aria-hidden="true" />
      </section>

      <section className="partners-content">
        <div className="partners-header">
          <h2>Exclusive Discounts</h2>
        </div>

        <div
          className="partners-stack-scroll-space"
          ref={stackRef}
          style={{ '--section-count': sections.length }}
        >
          <div
            className={`partners-stack-stage ${showSectionBackdrop ? 'partners-stack-stage-with-backdrop' : ''}`}
            style={{ '--partners-city-backdrop': `url(${osloCity})` }}
          >
            {isMobile ? (
              <MobilePartnerExperience
                sections={sections}
                activeSection={activeSection}
                onSelectSection={setActiveSection}
                selectedPartners={selectedPartners}
                onSelectPartner={handleSelectPartner}
                expandedOffers={expandedOffers}
                onToggleOffers={handleToggleOffers}
              />
            ) : null}

            <div className="partners-stack-meta" aria-hidden={isMobile}>
              <div className="partners-stack-dots" aria-hidden="true">
                {sections.map((section, index) => (
                  <span
                    key={section.title}
                    className={`partners-stack-dot ${index === activeSection ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="partners-sections" aria-hidden={isMobile}>
              {sections.map((section, index) => (
                <PartnerSection
                  key={section.title}
                  section={section}
                  index={index}
                  activeIndex={activeSection}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
