import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HotelDetails from './pages/HotelDetails';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/HomePage.css';
import './styles/HotelDetails.css';
import './styles/LoginSignup.css';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import VisitedHotels from './components/VisitedHotels';
import Settings from './components/Settings';
import Feedback from './components/Feedback';

const MainLayout = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
    <Header toggleSidebar={toggleSidebar} />
    <Sidebar show={showSidebar} onClose={toggleSidebar} />
    <Outlet />
    <Footer />
  </>
  )
};

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hotel/:id" element={<HotelDetails />} />
          <Route path="/profile" element={<Profile />} />
            <Route path="/visited-hotels" element={<VisitedHotels />} /> {/* Add this route */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/feedback" element={<Feedback />} />
        </Route>
        <Route path="/login" element={<LoginSignup />} />
        {/* Add other routes here that should not have the Header and Footer */}
      </Routes>
    </Router>
  );
};

export default App;
