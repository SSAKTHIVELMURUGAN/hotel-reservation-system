import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/HotelDetails.css"; 
import room1 from "../assets/images/room-1.jpg";
import room2 from "../assets/images/room-2.jpg";
import room3 from "../assets/images/room-3.jpg";
import room4 from "../assets/images/room-4.jpg";
import room5 from "../assets/images/room-5.jpg";
import room6 from "../assets/images/room-6.jpg";

const HotelDetails = () => {
  const { id } = useParams();

  // Hardcoded data for simplicity; replace with API data fetch in a real application
  const hotelDetails = {
    1: {
      name: 'Hilton Chennai',
      stars: '5 stars out of 5',
      address: '124/1 J.N.Salai, 100 Feet Rd, Poomagal Nagar, Guindy, Chennai, Tamil Nadu 600032, India',
      description: 'Welcome to Hilton Chennai, located in the heart of Chennai City Center. The hotel is perfect for two travelers, offering easy access to landmarks, shopping streets, and a diverse culinary scene. Enjoy modern comforts like air conditioning, complimentary Wi-Fi, and luxurious toiletries in the well-equipped rooms. Start your day with a delicious breakfast takeaway and relax by the stunning pool with a view. The attentive staff ensures an excellent stay, and amenities like a gym and buffet selection add to your comfort and fulfillment. Immerse yourself in captivating city views from select rooms. Book your stay at Hilton Chennai for a memorable and convenient experience in Chennai City Center.',
      highlights: {
        'Highlights': [
          '70 meters to public transportation',
          'Great for activities',
          'Excellent room comfort & quality',
          'Airport transfer',
          'Front desk [24-hour]',
          'Hilton CleanStay',
          'Staycation offers available',
        ],
        'Food and Drinks': [
          'Room service [24-hour]',
          'Coffee shop',
          'Hotel room service app',
        ],
        'Wellness': [
          'Fitness center',
          'Spa',
          'Massage',
        ],
        'Activities': [
          'Swimming Pool',
        ],
        'Sports & Entertainment': [
          'Game room',
        ],
        'Facilities': [
          'Front desk [24-hour]',
          'Airport transfer',
          'Valet parking',
          'Shuttle service',
          'Fitness center',
          'Swimming pool [outdoor]',
          'Free Wi-Fi in all rooms!',
          'Check-in/out [express]',
        ]
      },
      images: [room1, room2, room3], // Example images; add more as needed
    },
    2: {
      name: 'Marina Bay Sands',
      stars: '5 stars out of 5',
      address: 'Marina Bay, Singapore - 1.2 km to center',
      description: 'Welcome to Marina Bay Sands, a landmark destination in the heart of Singapore’s vibrant city district. This iconic hotel features three cascading towers, a world-famous infinity pool, and unparalleled luxury. Enjoy breathtaking views of the city from the Sands SkyPark, indulge in award-winning dining at celebrity chef restaurants, and explore a variety of entertainment options including a casino, theatre, and ArtScience Museum. With luxurious rooms and exceptional service, Marina Bay Sands offers an unforgettable experience in Singapore',
      highlights: {
        'Highlights': [
          '70 meters to public transportation',
          'Great for activities',
          'Excellent room comfort & quality',
          'Airport transfer',
          'Front desk [24-hour]',
          'Hilton CleanStay',
          'Staycation offers available',
        ],
        'Food and Drinks': [
          'Room service [24-hour]',
          'Coffee shop',
          'Hotel room service app',
        ],
        'Wellness': [
          'Fitness center',
          'Spa',
          'Massage',
        ],
        'Activities': [
          'Swimming Pool',
        ],
        'Sports & Entertainment': [
          'Game room',
        ],
        'Facilities': [
          'Front desk [24-hour]',
          'Airport transfer',
          'Valet parking',
          'Shuttle service',
          'Fitness center',
          'Swimming pool [outdoor]',
          'Free Wi-Fi in all rooms!',
          'Check-in/out [express]',
        ]
      },
      images: [room4, room5], // Example images; add more as needed
    },
    3: {
      name: 'Radisson Blu',
      stars: '4 stars out of 5',
      address: 'Kolkata City Center, Kolkata - 3.5 km to center',
      description: 'Welcome to Radisson Blu, located in the heart of Kolkata City Center. This upscale hotel offers modern amenities and stylish accommodations, perfect for both business and leisure travelers. Enjoy complimentary Wi-Fi, a well-equipped fitness center, and a refreshing outdoor pool. Start your day with a delicious breakfast buffet and unwind at the end of the day with a relaxing spa treatment. The hotel’s central location provides easy access to popular attractions, shopping, and dining options. Experience comfort and convenience at Radisson Blu',
      highlights: {
        'Highlights': [
          '70 meters to public transportation',
          'Great for activities',
          'Excellent room comfort & quality',
          'Airport transfer',
          'Front desk [24-hour]',
          'Hilton CleanStay',
          'Staycation offers available',
        ],
        'Food and Drinks': [
          'Room service [24-hour]',
          'Coffee shop',
          'Hotel room service app',
        ],
        'Wellness': [
          'Fitness center',
          'Spa',
          'Massage',
        ],
        'Activities': [
          'Swimming Pool',
        ],
        'Sports & Entertainment': [
          'Game room',
        ],
        'Facilities': [
          'Front desk [24-hour]',
          'Airport transfer',
          'Valet parking',
          'Shuttle service',
          'Fitness center',
          'Swimming pool [outdoor]',
          'Free Wi-Fi in all rooms!',
          'Check-in/out [express]',
        ]
      },
      images: [room1, room2, room3], // Example images; add more as needed
    },
    4: {
      name: 'Taj Mahal Palace',
      stars: '5 stars out of 5',
      address: 'Mumbai, India - 3 km to center',
      description: 'Welcome to the Taj Mahal Palace, an iconic heritage hotel in Mumbai. Overlooking the Arabian Sea and the Gateway of India, this luxurious hotel offers a blend of old-world charm and modern amenities. Enjoy a variety of dining options, including the renowned Wasabi by Morimoto and the Golden Dragon. Relax in elegantly designed rooms with stunning sea or city views, and take advantage of the 24-hour butler service. The hotel also features a spa, fitness center, and outdoor pool. Experience unparalleled luxury and service at the Taj Mahal Palace',
      highlights: {
        'Highlights': [
          '70 meters to public transportation',
          'Great for activities',
          'Excellent room comfort & quality',
          'Airport transfer',
          'Front desk [24-hour]',
          'Hilton CleanStay',
          'Staycation offers available',
        ],
        'Food and Drinks': [
          'Room service [24-hour]',
          'Coffee shop',
          'Hotel room service app',
        ],
        'Wellness': [
          'Fitness center',
          'Spa',
          'Massage',
        ],
        'Activities': [
          'Swimming Pool',
        ],
        'Sports & Entertainment': [
          'Game room',
        ],
        'Facilities': [
          'Front desk [24-hour]',
          'Airport transfer',
          'Valet parking',
          'Shuttle service',
          'Fitness center',
          'Swimming pool [outdoor]',
          'Free Wi-Fi in all rooms!',
          'Check-in/out [express]',
        ]
      },
      images: [room4, room5, room6], // Example images; add more as needed
    },
    5: {
      name: 'Shangri-La',
      stars: '5 stars out of 5',
      address: 'Dubai, UAE - 2 km to center',
      description: 'Welcome to Shangri-La, Dubai, a luxurious retreat in the heart of the city. This five-star hotel offers stunning views of the Burj Khalifa and the Arabian Gulf. Enjoy spacious rooms with elegant décor, world-class dining options, and a range of recreational facilities including a spa, fitness center, and outdoor pool. The hotel’s prime location provides easy access to Dubai’s top attractions, shopping, and entertainment. Experience the epitome of luxury and hospitality at Shangri-La',
      highlights: {
        'Highlights': [
          '70 meters to public transportation',
          'Great for activities',
          'Excellent room comfort & quality',
          'Airport transfer',
          'Front desk [24-hour]',
          'Hilton CleanStay',
          'Staycation offers available',
        ],
        'Food and Drinks': [
          'Room service [24-hour]',
          'Coffee shop',
          'Hotel room service app',
        ],
        'Wellness': [
          'Fitness center',
          'Spa',
          'Massage',
        ],
        'Activities': [
          'Swimming Pool',
        ],
        'Sports & Entertainment': [
          'Game room',
        ],
        'Facilities': [
          'Front desk [24-hour]',
          'Airport transfer',
          'Valet parking',
          'Shuttle service',
          'Fitness center',
          'Swimming pool [outdoor]',
          'Free Wi-Fi in all rooms!',
          'Check-in/out [express]',
        ]
      },
      images: [room1, room2, room3], // Example images; add more as needed
    },
    6: {
      name: 'Four Seasons',
      stars: '5 stars out of 5',
      address: 'Sydney, Australia - 1.5 km to center',
      description: 'Four Seasons Sydney offers a luxurious stay with elegant rooms, a variety of dining choices, and top-notch amenities. Enjoy the stunning views of Sydney Harbour, relax by the outdoor pool, or indulge in a spa treatment. The hotel is ideally located for both business and leisure travelers.',
      highlights: {
        'Highlights': [
          '70 meters to public transportation',
          'Great for activities',
          'Excellent room comfort & quality',
          'Airport transfer',
          'Front desk [24-hour]',
          'Hilton CleanStay',
          'Staycation offers available',
        ],
        'Food and Drinks': [
          'Room service [24-hour]',
          'Coffee shop',
          'Hotel room service app',
        ],
        'Wellness': [
          'Fitness center',
          'Spa',
          'Massage',
        ],
        'Activities': [
          'Swimming Pool',
        ],
        'Sports & Entertainment': [
          'Game room',
        ],
        'Facilities': [
          'Front desk [24-hour]',
          'Airport transfer',
          'Valet parking',
          'Shuttle service',
          'Fitness center',
          'Swimming pool [outdoor]',
          'Free Wi-Fi in all rooms!',
          'Check-in/out [express]',
        ]
      },
      images: [room4, room5, room6], // Example images; add more as needed
    }
  };

  const hotel = hotelDetails[id];

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotel-details">
      <header className="hotel-header">
        <h1>{hotel.name}</h1>
        <p>{hotel.stars}</p>
        <p>{hotel.address}</p>
      </header>

      <div className="hotel-images">
        <h2>Hotel Images</h2>
        <div className="hotel-image-gallery">
          {hotel.images.map((img, index) => (
            <img key={index} src={img} alt={`Hotel ${hotel.name} Room ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="hotel-description">
        <div className="hotel-description-box">
          <p>{hotel.description}</p>
        </div>
      </div>

      {Object.entries(hotel.highlights).map(([section, items]) => (
        <div key={section} className="hotel-highlight-box">
          <h3>{section}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HotelDetails;
