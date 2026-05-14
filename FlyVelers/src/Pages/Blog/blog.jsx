import { useEffect, useRef, useState } from 'react';
import './blog.css';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import divider from '../../assets/bottom-shape.webp.png';
import scotland from '../../assets/Scotland.png';
import costaRica from '../../assets/Costa Rica.jpg';
import nicaragua from '../../assets/Nicaragua.jpg';
import brazil from '../../assets/Brazil.png';
import japan from '../../assets/Japan.jpg';
import newZealand from '../../assets/New Zealand.jpg';
import russia from '../../assets/Russia-enhanced.png';
import france from '../../assets/France-enhanced.png';
import monaco from '../../assets/Monaco-enhanced.png';
import taiwan from '../../assets/Taiwan.jpg';

const blogSections = [
  {
    title: 'Beach Escapes',
    posts: [
      {
        title: 'Costa Rica',
        image: costaRica,
        location: 'Rainforest Coastlines',
        description:
          'Known for its Pura Vida lifestyle, Costa Rica offers a relaxed culture focused on nature and happiness. Visitors enjoy tropical beaches, national parks, and a strong connection with wildlife and sustainability.',
        articleTitle: 'Costa Rica: jungle trails, Pacific light and the Pura Vida rhythm',
        articleSummary:
          'Costa Rica works best when the trip balances wild nature, relaxed beach time and small local towns with a slower rhythm.',
        highlights: ['Monteverde cloud forests', 'Arenal volcano region', 'Pacific surf towns and eco-lodges'],
        articleBody: [
          'Costa Rica has built a travel identity around biodiversity and calm adventure. A trip here usually moves between dense rainforest, volcanic landscapes and beaches where the pace drops immediately.',
          'What makes the destination feel distinct is the way tourism and conservation overlap. National parks, local guides and eco-lodges are not separate from the experience; they are the core of it.',
          'For a stronger itinerary, combine one inland nature stop with one coastal stop. That gives the trip contrast instead of repeating the same beach experience from start to finish.',
        ],
      },
      {
        title: 'Nicaragua',
        image: nicaragua,
        location: 'Colonial Color And Lakes',
        description:
          'Nicaragua has a rich cultural heritage influenced by Spanish colonial history. Its coastal towns are full of local traditions, friendly people, and a growing surf culture that attracts travelers from around the world.',
        articleTitle: 'Nicaragua: colonial plazas, volcanic views and authentic coastal energy',
        articleSummary:
          'Nicaragua is strongest when treated as a cultural route: historic cities, lake landscapes and beach towns with less polished but more local character.',
        highlights: ['Granada architecture', 'Isletas and lake excursions', 'Surf routes on the Pacific coast'],
        articleBody: [
          'Nicaragua feels grounded and direct. The appeal is not luxury presentation, but color, scale and everyday local life around plazas, churches and markets.',
          'Granada is usually the visual anchor of the trip, while the surrounding lakes and volcanoes add the dramatic natural dimension that makes the country memorable.',
          'Travelers who enjoy destinations with personality, texture and fewer filters tend to connect well with Nicaragua.',
        ],
      },
      {
        title: 'Brazil',
        image: brazil,
        location: 'Ocean Energy',
        description:
          'Brazil is famous for its vibrant culture, music, and festivals like Carnival. Its beach life is full of energy, with people enjoying football, samba, and a lively social atmosphere by the ocean.',
        articleTitle: 'Brazil: iconic coastlines, urban rhythm and a culture built around movement',
        articleSummary:
          'Brazil rewards travelers who want a social, high-energy destination where landscape and street life matter equally.',
        highlights: ['Rio viewpoints and beaches', 'Music, nightlife and food culture', 'Long coastal escapes beyond the main cities'],
        articleBody: [
          'Brazil is difficult to reduce to one mood. In one trip, you can move from panoramic beaches to dense city neighborhoods, then into quieter coastal regions that feel completely different.',
          'The country is at its best when the itinerary leaves room for atmosphere instead of only landmarks. Sunset on the beach, live music and neighborhood food stops are part of the core experience.',
          'For the blog style you asked for, Brazil should read as vibrant and expansive, not only scenic.',
        ],
      },
    ],
  },
  {
    title: 'Mountain Adventures',
    posts: [
      {
        title: 'Japan',
        image: japan,
        location: 'Sacred Peaks',
        description:
          'Japan blends ancient traditions with modern life. Near Mount Fuji, you can experience temples, seasonal festivals, and a deep respect for nature that is part of Japanese culture.',
        articleTitle: 'Japan: mountain stillness, ritual detail and precise travel design',
        articleSummary:
          'Japan stands out because every part of the trip feels curated, from transport and food to seasonal scenery and cultural rituals.',
        highlights: ['Mount Fuji viewpoints', 'Temple towns and gardens', 'Seasonal travel in spring and autumn'],
        articleBody: [
          'Japan balances quiet with intensity. A mountain itinerary near Fuji can feel meditative, but just beyond that calm there is a highly organized, fast-moving travel network.',
          'The visual appeal is obvious, yet the deeper value is the discipline of the experience: timing, hospitality, public spaces and respect for detail all shape the trip.',
          'It works especially well for travelers who like structure, beauty and a strong cultural identity in every stop.',
        ],
      },
      {
        title: 'New Zealand',
        image: newZealand,
        location: 'Outdoor Freedom',
        description:
          "New Zealand's culture is influenced by Maori traditions and a strong connection to nature. It is known for outdoor adventures and a lifestyle that values exploration and respect for the environment.",
        articleTitle: 'New Zealand: cinematic landscapes and a travel culture built for exploration',
        articleSummary:
          'New Zealand is one of the clearest examples of a destination where the scenery itself drives the whole itinerary.',
        highlights: ['Panoramic rail and road routes', 'Adventure towns and alpine lakes', 'Maori cultural influence across the journey'],
        articleBody: [
          'New Zealand feels spacious in a way few destinations do. Roads, trails and viewpoints are not side activities; they are the main event.',
          'The country is ideal for travelers who prefer movement and open landscapes over dense city schedules. Even short stays benefit from a route-based plan.',
          'Its strongest emotional effect comes from scale: mountains, water and sky constantly reshape the trip.',
        ],
      },
      {
        title: 'Russia',
        image: russia,
        location: 'Historic Grandeur',
        description:
          'Russia has a rich history and cultural heritage, especially in its mountainous regions. Traditional food, folklore, and strong historical roots make it a unique destination to explore.',
        articleTitle: 'Russia: monumental history, layered architecture and powerful visual identity',
        articleSummary:
          'Russia reads best through scale: grand landmarks, deep history and cultural symbols that feel immediately recognizable.',
        highlights: ['Historic squares and cathedrals', 'Imperial and Soviet visual traces', 'Strong folklore and culinary identity'],
        articleBody: [
          'Russia has an architectural and historical weight that changes the tone of the trip immediately. The visual language is larger, heavier and more ceremonial than in most European routes.',
          'Travel here is often about reading layers: empire, revolution, religion and modern urban life sitting in the same frame.',
          'That combination gives the destination a distinctly dramatic blog presence.',
        ],
      },
    ],
  },
  {
    title: 'City Breaks',
    posts: [
      {
        title: 'Paris',
        image: france,
        location: 'Art And Romance',
        description:
          'Paris is known for its art, fashion, and romantic atmosphere. The city is full of museums, cafes, and historical landmarks, making it a cultural center of Europe.',
        articleTitle: 'Paris: timeless boulevards, museum culture and everyday elegance',
        articleSummary:
          'Paris remains compelling because it combines world-famous landmarks with a street atmosphere that still feels intimate.',
        highlights: ['Seine walks and Eiffel views', 'Museum circuits and classic cafes', 'Fashion, food and architecture in one compact city'],
        articleBody: [
          'Paris is not only about monuments. The city works because daily life itself looks curated: terraces, bookstores, bridges and neighborhoods all contribute to the experience.',
          'A short stay can still feel rich if the itinerary focuses on one district at a time instead of racing between landmarks.',
          'Its blog identity should feel refined, cultural and unmistakably urban.',
        ],
      },
      {
        title: 'Monaco',
        image: monaco,
        location: 'Mediterranean Luxury',
        description:
          'Monaco represents luxury and elegance. Its culture is influenced by high-end lifestyles, international events, and a mix of French and Mediterranean traditions.',
        articleTitle: 'Monaco: polished glamour, harbor views and condensed Riviera luxury',
        articleSummary:
          'Monaco is a small destination with a very specific point of view: precision, wealth, events and sea-facing elegance.',
        highlights: ['Monte Carlo atmosphere', 'Marina and cliffside viewpoints', 'Luxury hospitality and event culture'],
        articleBody: [
          'Monaco is less about variety and more about concentration. Everything is compressed into a compact, highly finished environment overlooking the Mediterranean.',
          'The destination is strongest as a short, stylish stop paired with the surrounding Riviera, where Monaco becomes the peak of the route rather than the entire route itself.',
          'For visual storytelling, it should feel bright, expensive and sharply composed.',
        ],
      },
      {
        title: 'Taiwan',
        image: taiwan,
        location: 'Tradition Meets Motion',
        description:
          'Taiwan offers a unique blend of Chinese traditions and modern innovation. Its culture is reflected in night markets, temples, and delicious street food.',
        articleTitle: 'Taiwan: temple courtyards, night market energy and modern Asian contrast',
        articleSummary:
          'Taiwan works through contrast: old ritual spaces, dense modern cities and one of the most compelling food cultures in the region.',
        highlights: ['Night markets and local food routes', 'Temple architecture and civic plazas', 'Fast urban movement with traditional depth'],
        articleBody: [
          'Taiwan has a sharp rhythm. In a single day, you can move from a quiet temple courtyard into a crowded market full of sound, smoke and color.',
          'That contrast gives the destination its strength. It feels modern without flattening its traditions, and accessible without losing personality.',
          'As a travel story, Taiwan should feel alive, layered and intensely local.',
        ],
      },
    ],
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [pageReady, setPageReady] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setPageReady(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!selectedPost) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedPost(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedPost]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { sectionid } = entry.target.dataset;

          if (!sectionid) {
            return;
          }

          setVisibleSections((current) => ({
            ...current,
            [sectionid]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`blog-page ${pageReady ? 'page-ready' : ''}`}>
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${scotland})` }}
      >
        <Navbar />

        <div className="blog-hero-overlay">
          <p className="blog-hero-kicker">Find your Way,</p>
          <h1 className="blog-hero-title">Love Your Stay</h1>
        </div>

        <img className="blog-divider" src={divider} alt="" aria-hidden="true" />
      </section>

      <main className="blog-content">
        <header className="blog-intro">
          <h2>Recommended Trips For Your</h2>
        </header>

        {blogSections.map((section, sectionIndex) => (
          <section
            key={section.title}
            ref={(element) => {
              sectionRefs.current[sectionIndex] = element;
            }}
            data-sectionid={section.title}
            className={`blog-section ${visibleSections[section.title] ? 'is-visible' : ''}`}
            style={{ '--section-delay': `${sectionIndex * 0.16}s` }}
          >
            <h3>{section.title}</h3>

            <div className="blog-grid">
              {section.posts.map((post, postIndex) => (
                <button
                  key={post.title}
                  type="button"
                  className="blog-card"
                  onClick={() => setSelectedPost(post)}
                  style={{ '--card-delay': `${postIndex * 0.1}s` }}
                >
                  <div className="blog-card-media">
                    <img src={post.image} alt={post.title} className="blog-card-image" />
                    <div className="blog-card-hover">
                      <span>Read article</span>
                    </div>
                  </div>

                  <div className="blog-card-body">
                    <h4>{post.title}</h4>
                    <span className="blog-card-line" aria-hidden="true" />
                    <p>{post.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />

      {selectedPost ? (
        <div
          className="blog-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
          onClick={() => setSelectedPost(null)}
        >
          <article
            className="blog-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="blog-modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close article"
            >
              ×
            </button>

            <div
              className="blog-modal-hero"
              style={{ backgroundImage: `url(${selectedPost.image})` }}
            >
              <div className="blog-modal-hero-overlay">
                <span className="blog-modal-location">{selectedPost.location}</span>
                <h2 id="blog-modal-title">{selectedPost.articleTitle}</h2>
                <p>{selectedPost.articleSummary}</p>
              </div>
            </div>

            <div className="blog-modal-body">
              <section className="blog-modal-copy">
                {selectedPost.articleBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <aside className="blog-modal-side">
                <h3>Highlights</h3>
                <ul>
                  {selectedPost.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default Blog;
