import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage.jsx';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage.jsx';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage.jsx';
import Services from './Pages/services/services.jsx';
import Partners from './Pages/Partners/Partners.jsx';
import Login from './components/login.jsx'
import Navbar from './components/navbar.jsx';
import Reviews from './Pages/Reviews/Reviews.jsx';
import Blog from './Pages/Blog/blog.jsx';
import Discounts from './Pages/Discounts/Disconunts.jsx';
import RoutesPage from './Pages/Routes/Routes.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import { CartProvider } from './context/CartContext.jsx';

import './App.css';

function AppRoutes() {
  const { pathname } = useLocation();
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleNavbarVisibility = (event) => {
      setHideNavbar(Boolean(event.detail?.hidden));
    };

    window.addEventListener('flyvelers-navbar-visibility', handleNavbarVisibility);

    return () => {
      window.removeEventListener('flyvelers-navbar-visibility', handleNavbarVisibility);
    };
  }, []);

  useEffect(() => {
    setHideNavbar(false);
  }, [pathname]);

  return (
    <>
      {pathname !== '/login' && !hideNavbar ? <Navbar /> : null}

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* ruta temporal */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;
