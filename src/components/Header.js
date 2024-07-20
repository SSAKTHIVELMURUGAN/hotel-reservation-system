import React, { useState } from 'react';
import { Navbar, FormControl, Button, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Header.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [destination, setDestination] = useState('');
  const [who, setWho] = useState(''); // Initialize as empty string

  const handleSearch = () => {
    if (destination && checkInDate && checkOutDate && who) {
      alert('Search button clicked!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleWhoChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setWho(''); // Allow empty value
    } else {
      const numValue = Math.max(1, Math.min(10, Number(value)));
      setWho(numValue);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid className="navbar-container">
        <div className="navbar-left">
          <Navbar.Brand href="/" className="navbar-brand">
            <img src={logo} alt="Fasgo Logo" className="logo-image" />
          </Navbar.Brand>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <FormControl
              type="text"
              placeholder="Where"
              className="mr-sm-2"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check in"
              className="date-input"
              dateFormat="yyyy/MM/dd"
            />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check out"
              className="date-input"
              dateFormat="yyyy/MM/dd"
            />
            <div className="who-container">
              <span className="person-text">Person</span>
              <FormControl
                type="number"
                placeholder="1"
                className="who-input"
                value={who}
                onChange={handleWhoChange}
                min="1"
                max="10"
              />
            </div>
            <Button
              variant="primary"
              onClick={handleSearch}
              className="search-button"
              disabled={!destination || !checkInDate || !checkOutDate || who === ''}
            >
              <i className="fas fa-search"></i>
            </Button>
          </div>
        </div>
        <div className="user-icon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
