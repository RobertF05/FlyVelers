import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import { useCart } from '../context/CartContext.jsx';
import cartIcon from '../assets/cart-icon-ai.png';
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
  const {
    addPurchaseRecord,
    cartCount,
    cartItems,
    cartTotal,
    clearCart,
    removeFromCart,
    subscriptionPlan,
    userProfile,
    isLoggedIn,
  } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
    setCheckoutOpen(false);
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

  useEffect(() => {
    if (!cartOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [cartOpen]);

  const subscriptionLabel = subscriptionPlan
    ? `${subscriptionPlan.charAt(0).toUpperCase()}${subscriptionPlan.slice(1)} plan`
    : null;
  const displayName = userProfile?.fullName || userProfile?.email || 'My account';
  const accountNavItem = isLoggedIn
    ? { label: displayName, href: '/profile', variant: 'account' }
    : { label: 'Login / Create Account', href: '/login', variant: 'auth' };
  const visibleNavItems = [...navItems, accountNavItem];

  const handleCartCheckout = (event) => {
    event.preventDefault();
    addPurchaseRecord({
      type: 'cart',
      title: 'Cart purchase',
      total: cartTotal,
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity || 1,
        summary: item.summary,
      })),
    });
    setCheckoutSuccess(true);

    setTimeout(() => {
      clearCart();
      setCheckoutOpen(false);
      setCartOpen(false);
      setCheckoutSuccess(false);
    }, 1200);
  };

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
        {visibleNavItems.map((item) => (
          <a
            key={item.label}
            className={[
              'navbar-link',
              item.href === pathname || item.label === activeLabel ? 'highlighted' : '',
              item.variant === 'auth' ? 'auth-link' : '',
              item.variant === 'account' ? 'account-link' : '',
            ].filter(Boolean).join(' ')}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
          ))}
      </nav>

      <button
        type="button"
        className="cart-navbar-button"
        aria-label={`Open cart${cartCount ? `, ${cartCount} item${cartCount === 1 ? '' : 's'}` : ''}`}
        aria-expanded={cartOpen}
        onClick={() => {
          setMenuOpen(false);
          setCartOpen((currentValue) => !currentValue);
        }}
      >
        <img src={cartIcon} alt="" aria-hidden="true" />
        {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
      </button>
      </header>

      {menuOpen ? (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      {cartOpen ? (
        <>
          <button
            type="button"
            className="cart-drawer-backdrop"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          />

          <aside className="cart-drawer" aria-label="Shopping cart">
            <div className="cart-drawer-header">
              <div>
                <span>FlyVelers cart</span>
                <h2>Your selections</h2>
              </div>
              <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart">
                x
              </button>
            </div>

            <div className="cart-subscription">
              <span>Subscription</span>
              <strong>{subscriptionLabel || 'No active plan'}</strong>
            </div>

            <div className="cart-items">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <article key={item.id} className="cart-item">
                    <img src={item.image} alt="" aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      {item.price && item.price !== 'Custom quote' ? (
                        <strong>{item.price}</strong>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </article>
                ))
              ) : (
                <p className="cart-empty">No discount offers added yet.</p>
              )}
            </div>

            <div className="cart-drawer-footer">
              <div>
                <span>Estimated total</span>
                <strong>${cartTotal.toLocaleString('en-US')}</strong>
              </div>
              <div className="cart-footer-actions">
                <button
                  type="button"
                  className="cart-buy-button"
                  onClick={() => setCheckoutOpen(true)}
                  disabled={cartItems.length === 0}
                >
                  Buy
                </button>
                <button type="button" onClick={clearCart} disabled={cartItems.length === 0}>
                  Clear cart
                </button>
              </div>
            </div>
          </aside>
        </>
      ) : null}

      {checkoutOpen ? (
        <div
          className="cart-payment-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-payment-title"
          onClick={() => setCheckoutOpen(false)}
        >
          <form
            className="cart-payment-modal"
            onSubmit={handleCartCheckout}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="cart-payment-close"
              onClick={() => setCheckoutOpen(false)}
              aria-label="Close payment form"
            >
              x
            </button>
            <span>Secure checkout</span>
            <h2 id="cart-payment-title">Complete your purchase</h2>
            <p>Card details are requested only for this demo and will not be saved.</p>

            <div className="cart-payment-summary">
              <span>Total</span>
              <strong>${cartTotal.toLocaleString('en-US')}</strong>
            </div>

            <div className="cart-payment-grid">
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

            <button type="submit" className="cart-payment-submit">
              {checkoutSuccess ? 'Purchase complete' : 'Pay now'}
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
