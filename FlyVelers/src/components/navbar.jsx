import './navbar.css';
import logo from '../assets/flyvelers-logo.png';

const navItems = [
  { label: 'Home', href: '/main' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Travel Routes', href: '#routes' },
  { label: 'Discounts', href: '#discounts' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Reviews', href: '/reviews'},
];

function Navbar({ activeLabel }) {
  const currentPath = window.location.pathname;
  return (
    <header className="main-navbar">
      <a className="brand" href="/main" aria-label="FlyVelers home">
        <img className="brand-logo" src={logo} alt="FlyVelers logo" />
        <span className="brand-name">FlyVelers</span>
      </a>

      <nav className="navbar-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={
              item.href === currentPath 
                ? 'navbar-link highlighted'
                : 'navbar-link'
            }
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
