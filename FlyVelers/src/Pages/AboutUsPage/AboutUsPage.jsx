import { useEffect, useRef, useState } from 'react';
import './AboutUsPage.css';
import Navbar from '../../components/navbar.jsx';
import heroImage from '../../assets/maldivas.png';
import villaGinaVarenna from '../../assets/villa-gina-varenna.png';
import globos from '../../assets/Globos.png';
import haLongBay from '../../assets/Ha-long-bay.png';
import Footer from '../../components/footer.jsx';

const sections = [
  {
    title: 'WHO ARE WE?',
    text: 'Flyvelers is a modern travel agency dedicated to creating unforgettable travel experiences. We specialize in planning personalized trips, offering services such as flight bookings, hotel reservations, and guided tours. Our team is committed to providing a smooth, reliable, and enjoyable journey for every traveler.',
    layout: 'media-left',
    image: villaGinaVarenna,
    imageAlt: 'Scenic waterfront destination',
  },
  {
    title: 'MISSION',
    text: 'Our mission is to make travel simple, accessible, and enjoyable for everyone. We strive to deliver high-quality service, affordable options, and personalized solutions that meet the unique needs of each customer.',
    layout: 'media-right',
    image: globos,
    imageAlt: 'Hot air balloons over a valley',
  },
  {
    title: 'VISION',
    text: 'Our vision is to become a leading and trusted travel agency, recognized for innovation, excellence, and customer satisfaction. We aim to inspire people to explore the world and create lasting memories through exceptional travel experiences.',
    layout: 'media-left',
    image: haLongBay,
    imageAlt: 'Karst islands over emerald water',
  },
];

const AboutUsPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number(entry.target.dataset.index);

          setVisibleSections((current) => (
            current.includes(index) ? current : [...current, index]
          ));

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    const refs = cardRefs.current.filter(Boolean);
    refs.forEach((card) => observer.observe(card));

    return () => {
      refs.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-scroll-stage">
        <section
          className="about-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <Navbar activeLabel="About Us" />

          <div className="about-hero-overlay">
            <div className="about-hero-texts" />
          </div>
        </section>

        <section className="about-content">
          <div className="about-content-inner">
            {sections.map((section, index) => (
              <article
                key={section.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-index={index}
                className={`about-card ${section.layout} ${
                  visibleSections.includes(index) ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${index * 160}ms` }}
              >
                <div className="about-card-media">
                  <img src={section.image} alt={section.imageAlt} />
                </div>

                <div className="about-card-copy">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
