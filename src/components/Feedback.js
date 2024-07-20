import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== '') {
      setSubmitted(true);
      setFeedback('');
      setTimeout(() => {
        setSubmitted(false);
      }, 3000); // Hide the message after 3 seconds
    }
  };

  return (
    <div className="feedback-container fade-in">
      <h1>Feedback</h1>
      <div className="feedback-box">
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback..."
          ></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && <p className="feedback-message fade-in">Feedback submitted!</p>}
      </div>
    </div>
  );
};

export default Feedback;
