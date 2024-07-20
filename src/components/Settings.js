import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings() {
  const [profile, setProfile] = useState({
    password: '',
    newPassword: '',
  });

  const [privacy, setPrivacy] = useState({
    dataVisibility: 'Public',
    twoFactorAuth: false,
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
  });

  const [security, setSecurity] = useState({
    loginHistory: [],
    connectedDevices: [],
  });

  const [language, setLanguage] = useState('English');

  const [fadeType, setFadeType] = useState({
    profile: 'fade-in',
    privacy: 'fade-in',
    notifications: 'fade-in',
    security: 'fade-in',
    language: 'fade-in',
  });

  useEffect(() => {
    Object.keys(fadeType).forEach((key) => {
      setFadeType((prev) => ({ ...prev, [key]: 'fade-in' }));
    });
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrivacyChange = (e) => {
    const { name, checked, value } = e.target;
    setPrivacy((prev) => ({
      ...prev,
      [name]: value === undefined ? checked : value,
    }));
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    setFadeType((prev) => ({ ...prev, profile: 'fade-out' }));
    setTimeout(() => {
      console.log('Settings saved:', { profile, privacy, notifications, security, language });
      setFadeType((prev) => ({ ...prev, profile: 'fade-in' }));
    }, 500);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <section className={`settings-section ${fadeType.profile}`}>
        <h2>Change Password</h2>
        <div className="settings-box">
          <label>
            Current Password:
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              placeholder="Enter current password"
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={profile.newPassword}
              onChange={handleProfileChange}
              placeholder="Enter new password"
            />
          </label>
          <div className="button-container">
            <button onClick={handleSave}>Save Changes</button>
          </div>
        </div>
      </section>

      <section className={`settings-section ${fadeType.privacy}`}>
        <h2>Privacy</h2>
        <div className="settings-box">
          <label className="full-width-label">
            Data Visibility:
            <select 
              name="dataVisibility" 
              value={privacy.dataVisibility} 
              onChange={handlePrivacyChange}
            >
              <option value="Public">Public</option>
              <option value="Friends">Friends</option>
              <option value="Only Me">Only Me</option>
            </select>
          </label>
          <label className="full-width-label">
            Two-Factor Authentication:
            <label className="switch">
              <input 
                type="checkbox" 
                name="twoFactorAuth" 
                checked={privacy.twoFactorAuth} 
                onChange={handlePrivacyChange} 
              />
              <span className="slider round"></span>
            </label>
          </label>
        </div>
      </section>

      <section className={`settings-section ${fadeType.notifications}`}>
        <h2>Notifications</h2>
        <div className="settings-box">
          <label className="full-width-label">
            Email Notifications:
            <label className="switch">
              <input 
                type="checkbox" 
                name="emailNotifications" 
                checked={notifications.emailNotifications} 
                onChange={handleNotificationsChange} 
              />
              <span className="slider round"></span>
            </label>
          </label>
          <label className="full-width-label">
            Push Notifications:
            <label className="switch">
              <input 
                type="checkbox" 
                name="pushNotifications" 
                checked={notifications.pushNotifications} 
                onChange={handleNotificationsChange} 
              />
              <span className="slider round"></span>
            </label>
          </label>
        </div>
      </section>

      <section className={`settings-section ${fadeType.security}`}>
        <h2>Account Security</h2>
        <div className="settings-box">
          <p>Manage your account security settings here.</p>
          {/* Display security-related information */}
        </div>
      </section>

      <section className={`settings-section ${fadeType.language}`}>
        <h2>Language & Region</h2>
        <div className="settings-box">
          <label className="full-width-label">
            Language:
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              {/* Add more languages as needed */}
            </select>
          </label>
        </div>
      </section>
    </div>
  );
}

export default Settings;
