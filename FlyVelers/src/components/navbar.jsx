import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/flyvelers-logo.png';
import mobileMenuBg from '../assets/navbar-mobile-menu-bg.png';

const navItems = [
  { label: 'Home', href: '/main' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'Travel Routes', href: '/routes' },
  { label: 'Discounts', href: '/discounts' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Reviews', href: '/reviews'},
];

function Navbar({ hidden = false, activeLabel = null }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (hidden) {
      setMenuOpen(false);
    }
  }, [hidden]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`main-navbar ${menuOpen ? 'menu-open' : ''} ${hidden ? 'is-hidden' : ''}`}>
      <a className="brand" href="/main" aria-label="FlyVelers home">
        <img className="brand-logo" src={logo} alt="FlyVelers logo" />
        <span className="brand-name">FlyVelers</span>
      </a>

      <button
        type="button"
        className={`navbar-toggle ${menuOpen ? 'is-open' : ''}`}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="mobile-navigation"
        className={`navbar-links ${menuOpen ? 'is-open' : ''}`}
        aria-label="Primary navigation"
        style={menuOpen ? { '--navbar-mobile-menu-bg': `url(${mobileMenuBg})` } : undefined}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            className={
              item.href === pathname || item.label === activeLabel
                ? 'navbar-link highlighted'
                : 'navbar-link'
            }
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      </header>

      {menuOpen ? (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}

export default Navbar;
