import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage.jsx';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage.jsx';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage.jsx';
import Services from './Pages/services/services.jsx';
import Partners from './Pages/Partners/Partners.jsx';
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
        
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  );
}

export default App;
