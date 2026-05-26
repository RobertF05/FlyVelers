import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage.jsx';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage.jsx';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage.jsx';
import Services from './Pages/services/services.jsx';
import Partners from './Pages/Partners/Partners.jsx';
import Login from './components/login.jsx'
import Reviews from './Pages/Reviews/Reviews.jsx';
import Blog from './Pages/Blog/blog.jsx';
import Discounts from './Pages/Discounts/Disconunts.jsx';
import RoutesPage from './Pages/Routes/Routes.jsx';

import './App.css';

function App() {
  return (
    <Router>
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
        
        {/* ruta temporal */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  );
}

export default App;
