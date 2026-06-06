import { useEffect, useRef, useState } from 'react';
import './AboutUsPage.css';

import Footer from '../../components/footer.jsx';

import heroImage from '../../assets/maldivas.png';
import creatorsBackground from '../../assets/alpes2.png';

import villaGinaVarenna from '../../assets/villa-gina-varenna.png';
import globos from '../../assets/Globos.png';
import haLongBay from '../../assets/Ha-long-bay.png';

import mateo from '../../assets/mateo.png';
import roberto from '../../assets/roberto.png';
import mariana from '../../assets/mariana.png';
import cristian from '../../assets/cristian.png';

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

const creators = [
  {
    name: 'Ing. Mateo Fonseca',
    image: mateo,
    description:
      'Maximum leader and key figure of the organization, responsible for defining the strategic direction and ensuring sustainable growth.',
  },
  {
    name: 'Ing. Roberto Fuentes',
    image: roberto,
    description:
      'Systems Engineer, specialist in logistics and cybersecurity, responsible for technological infrastructure and process optimization.',
  },
  {
    name: 'Ing. Mariana Vallecillo',
    image: mariana,
    description:
      'Systems Engineer responsible for marketing strategy, branding, communication expansion and strategic partnerships.',
  },
  {
    name: 'Ing. Cristian Tinoco',
    image: cristian,
    description:
      'Systems Engineer specialized in accounting and organization. Responsible for financial management and budget control.',
  },
];

const AboutUsPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [showCreators, setShowCreators] = useState(false);

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          setVisibleSections((current) => {
            if (entry.isIntersecting) {
              return current.includes(index)
                ? current
                : [...current, index];
            }

            return current.filter((item) => item !== index);
          });
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    const refs = cardRefs.current.filter(Boolean);

    refs.forEach((card) => observer.observe(card));

    return () => {
      refs.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, [showCreators]);

  return (
    <div className="about-page">
      <div className="about-scroll-stage">
        <section
          className="about-hero"
          style={{
            backgroundImage: `url(${
              showCreators
                ? creatorsBackground
                : heroImage
            })`,
          }}
        >
        </section>

        <section className="about-content">
          <div className="about-content-inner">
            <div
              className={`content-switch ${
                showCreators
                  ? 'show-creators'
                  : ''
              }`}
            >
              {!showCreators ? (
                <>
                  {sections.map((section, index) => (
                    <article
                      key={section.title}
                      ref={(element) => {
                        cardRefs.current[index] =
                          element;
                      }}
                      data-index={index}
                      className={`about-card ${
                        section.layout
                      } ${
                        visibleSections.includes(index)
                          ? 'is-visible'
                          : ''
                      }`}
                      style={{
                        transitionDelay: `${
                          index * 160
                        }ms`,
                      }}
                    >
                      <div className="about-card-media">
                        <img
                          src={section.image}
                          alt={section.imageAlt}
                        />
                      </div>

                      <div className="about-card-copy">
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                      </div>
                    </article>
                  ))}

                  <div className="switch-button-container">
                    <button
                      className="switch-button"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });

                        setTimeout(() => {
                          setShowCreators(true);
                        }, 250);
                      }}
                    >
                      →
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="collaborators-title-container">
                    <h2 className="collaborators-title">
                      Collaborators
                    </h2>
                  </div>

                  <div className="creators-grid">
                    {creators.map(
                      (creator, index) => (
                        <div
                          key={creator.name}
                          className={`creator-card ${
                            index % 2 === 0
                              ? 'left'
                              : 'right'
                          }`}
                        >
                          <div className="creator-image-container">
                            <img
                              src={creator.image}
                              alt={creator.name}
                            />
                          </div>

                          <div className="creator-name">
                            {creator.name}
                          </div>

                          <p>
                            {creator.description}
                          </p>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="switch-button-container">
                    <button
                      className="switch-button"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });

                        setTimeout(() => {
                          setShowCreators(false);
                        }, 250);
                      }}
                    >
                      ←
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
