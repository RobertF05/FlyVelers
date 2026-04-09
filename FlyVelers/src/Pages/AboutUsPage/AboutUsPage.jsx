import './AboutUsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar.jsx';
import heroImage from '../../assets/maldivas.png';
import divider from '../../assets/bottom-shape.webp.png';
import villaGinaVarenna from '../../assets/villa-gina-varenna.png';
import globos from '../../assets/Globos.png';
import haLongBay from '../../assets/Ha-long-bay.png';

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
  return (
    <div className="about-page">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Navbar activeLabel="About Us" />

        <div className="about-hero-overlay">
          <div className="about-hero-texts">
            <h2 className="about-hero-subtitle">Find your Way,</h2>
            <h1 className="about-hero-title">Love Your Stay</h1>
          </div>
        </div>

        <img className="about-divider" src={divider} alt="" />
      </section>

      <section className="about-content">
        <div className="about-content-inner">
          {sections.map((section) => (
            <article
              key={section.title}
              className={`about-card ${section.layout}`}
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

          <button className="about-next-button" type="button" aria-label="Next">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
