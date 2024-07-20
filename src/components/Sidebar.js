// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ show, onClose }) {
  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="sidebar-content">
        <h2>Menu</h2>
        <ul>
          <li><Link className='linker' to="/profile" onClick={onClose}>Profile</Link></li>
          <li><Link className='linker' to="/visited-hotels" onClick={onClose}>Visited Hotels</Link></li>
          <li><Link className='linker' to="/settings" onClick={onClose}>Settings</Link></li>
          <li><Link className='linker' to="/feedback" onClick={onClose}>Help & Feedback</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
