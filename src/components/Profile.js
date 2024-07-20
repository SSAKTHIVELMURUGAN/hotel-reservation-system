// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Profile.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: null,
    gender: '',
    address: '',
    profilePic: ''
  });

  const [newProfilePic, setNewProfilePic] = useState(null);

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedDetails) {
      setUserDetails({
        ...storedDetails,
        dob: storedDetails.dob ? new Date(storedDetails.dob) : null
      });
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem('userDetails', JSON.stringify({
      ...userDetails,
      dob: userDetails.dob ? userDetails.dob.toISOString() : null,
      profilePic: userDetails.profilePic
    }));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setUserDetails(prevDetails => ({
      ...prevDetails,
      dob: date
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserDetails(prevDetails => ({
          ...prevDetails,
          profilePic: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{userDetails.name || "User Name"}</h1>
      </div>
      <div className="profile-sections">
        <div className="profile-section personal-info">
          <h2>Personal Information</h2>
          
          <div className="profile-box">
            <div className="personal-info-container">
              <div className="profile-info">
                <p><strong>Name</strong></p>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="name" 
                    value={userDetails.name} 
                    onChange={handleChange} 
                  />
                ) : (
                  <p>{userDetails.name}</p>
                )}
                
                <p><strong>Date of Birth</strong></p>
                {isEditing ? (
                  <DatePicker
                    selected={userDetails.dob}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    className="date-picker"
                    placeholderText="Select a date"
                  />
                ) : (
                  <p>{userDetails.dob ? userDetails.dob.toLocaleDateString() : "Not provided"}</p>
                )}
                <p><strong>Gender</strong></p>
                {isEditing ? (
                  <select
                    name="gender"
                    value={userDetails.gender}
                    onChange={handleChange}
                    className="gender-select"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                ) : (
                  <p>{userDetails.gender || "Not provided"}</p>
                )}
              </div>
              <div className="profile-pic-container">
                <img 
                  src={userDetails.profilePic || "https://via.placeholder.com/150"} 
                  alt="Profile" 
                  className="profile-pic" 
                />
                {isEditing && (
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="file-input"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="profile-section contact-info">
          <h2>Contact Information</h2>
        
          <div className="profile-box">
            <p><strong>Mobile Number</strong></p>
            {isEditing ? (
              <input 
                type="text" 
                name="mobile" 
                value={userDetails.mobile} 
                onChange={handleChange} 
              />
            ) : (
              <p>{userDetails.mobile}</p>
            )}
            
            <p><strong>Email</strong></p>
            {isEditing ? (
              <input 
                type="text" 
                name="email" 
                value={userDetails.email} 
                onChange={handleChange} 
              />
            ) : (
              <p>{userDetails.email}</p>
            )}
            
            <p><strong>Address</strong></p>
            {isEditing ? (
              <input 
                type="text" 
                name="address" 
                value={userDetails.address} 
                onChange={handleChange} 
              />
            ) : (
              <p>{userDetails.address}</p>
            )}
          </div>
        </div>
        
      </div>
      <br></br>
      <button className="edit-button" onClick={isEditing ? handleSaveClick : handleEditClick}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
      
    </div>
  );
}

export default Profile;
