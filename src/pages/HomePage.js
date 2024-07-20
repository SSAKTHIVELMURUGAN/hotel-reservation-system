import React from 'react';
import { useNavigate } from 'react-router-dom';
import room1 from "../assets/images/room-1.jpg"; 
import room2 from "../assets/images/room-2.jpg"; 
import room3 from "../assets/images/room-3.jpg"; 
import room4 from "../assets/images/room-4.jpg"; 
import room5 from "../assets/images/room-5.jpg"; 
import room6 from "../assets/images/room-6.jpg"; 
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const hotels = [
    { id: 1, name: 'Hilton Chennai', image: room1, description: '5 stars out of 5', location: 'Chennai City Center, Chennai - 4.1 km to center', price: '10,670 Rs.', originalPrice: '14,616 Rs.', discount: '27% OFF TODAY', rating: '8.4', reviews: '413 reviews' },
    { id: 2, name: 'Marina Bay Sands', image: room2, description: '5 stars out of 5', location: 'Marina Bay, Singapore - 1.2 km to center', price: '20,000 Rs.', originalPrice: '25,000 Rs.', discount: '20% OFF TODAY', rating: '9.2', reviews: '1,243 reviews' },
    { id: 3, name: 'Radisson Blu', image: room3, description: '4 stars out of 5', location: 'Kolkata City Center, Kolkata - 3.5 km to center', price: '10,200 Rs.', originalPrice: '12,000 Rs.', discount: '15% OFF TODAY', rating: '8.0', reviews: '523 reviews' },
    { id: 4, name: 'Taj Mahal Palace', image: room4, description: '5 stars out of 5', location: 'Mumbai, India - 3 km to center', price: '22,500 Rs.', originalPrice: '30,000 Rs.', discount: '25% OFF TODAY', rating: '9.0', reviews: '980 reviews' },
    { id: 5, name: 'Shangri-La', image: room5, description: '5 stars out of 5', location: 'Dubai, UAE - 2 km to center', price: '24,500 Rs.', originalPrice: '35,000 Rs.', discount: '30% OFF TODAY', rating: '9.5', reviews: '1,500 reviews' },
    { id: 6, name: 'InterContinental', image: room6, description: '5 stars out of 5', location: 'London, UK - 0.5 km to center', price: '26,000 Rs.', originalPrice: '40,000 Rs.', discount: '35% OFF TODAY', rating: '9.7', reviews: '2,000 reviews' }
  ];

  const handleHotelClick = (id) => {
    navigate(`/hotel/${id}`);
  };

  return (
    <div>
      <header>
        <h1>Offer Rooms</h1>
      </header>
      <main>
        <p>Welcome to our Kadda! This is a basic example of a hotel room booking.</p>
        <div className="image-gallery">
          {hotels.map(hotel => (
            <div key={hotel.id} className="image-item" onClick={() => handleHotelClick(hotel.id)}>
              <img src={hotel.image} alt={hotel.name} />
              <div className="hotel-info">
                <div className="info-left">
                  <h2>{hotel.name}</h2>
                  <p>{hotel.description}</p>
                  <p>{hotel.location}</p>
                  <p>This property offers:</p>
                  <ul>
                    <li>Breakfast</li>
                    <li>Free Wi-Fi</li>
                    <li>Special Offers</li>
                  </ul>
                  <p>Promoted</p>
                  <p>Popular! Last booked 12 hours ago</p>
                  <p>Family Getaway</p>
                </div>
                <div className="info-right">
                  <div className="rating">
                    <span>{hotel.rating}</span>
                    <p>Excellent</p>
                  </div>
                  <p className="reviews">{hotel.reviews}</p>
                  <p className="discount">{hotel.discount}</p>
                  <p>Per night before taxes and fees</p>
                  <p className="original-price">{hotel.originalPrice}</p>
                  <p className="price">{hotel.price}</p>
                  <p>+ FREE CANCELLATION</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
