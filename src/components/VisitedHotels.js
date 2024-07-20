// src/components/VisitedHotels.js
import React from 'react';
import './VisitedHotels.css';

// Import local images
import hotel1 from './hotel1.jpeg';
import hotel2 from './hotel2.jpeg';
import hotel3 from './hotel3.jpeg';
import hotel4 from './hotel4.jpeg';
import hotel5 from './hotel5.jpeg';

const hotels = [
  {
    name: 'Hotel Sunshine',
    image: hotel1,
    location: '123 Sunshine St, Sunnyvale',
    contact: '123-456-7890',
    starRating: 4,
    amount: '$120/night',
  },
  {
    name: 'Ocean View Resort',
    image: hotel2,
    location: '456 Ocean Ave, Beach City',
    contact: '098-765-4321',
    starRating: 4.7,
    amount: '$200/night',
  },
  {
    name: 'Mountain Retreat',
    image: hotel3,
    location: '789 Mountain Rd, Hilltop',
    contact: '111-222-3333',
    starRating: 5,
    amount: '$150/night',
  },
  {
    name: 'City Center Inn',
    image: hotel4,
    location: '321 City Center, Metropolis',
    contact: '444-555-6666',
    starRating: 4.0,
    amount: '$100/night',
  },
  {
    name: 'Lakeside Lodge',
    image: hotel5,
    location: '654 Lakeside Dr, Lakeview',
    contact: '777-888-9999',
    starRating: 4.8,
    amount: '$180/night',
  },
];

function VisitedHotels() {
  return (
    <div className="visited-hotels-container">
      <h1>Visited Hotels</h1>
      <div className="hotels-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-box fade-in">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-details">
              <h2>{hotel.name}</h2>
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Contact:</strong> {hotel.contact}</p>
              <p><strong>Star Rating:</strong> <span className="stars">{'★'.repeat(Math.floor(hotel.starRating))}{'☆'.repeat(5 - Math.floor(hotel.starRating))}</span></p>
              <p><strong>Amount:</strong> {hotel.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitedHotels;
