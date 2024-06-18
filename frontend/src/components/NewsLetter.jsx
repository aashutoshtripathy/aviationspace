import React, { useState, useEffect } from 'react';
import { sendmail } from '../apiService';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const subscribed = localStorage.getItem('isSubscribed');
    if (subscribed) {
      setIsSubscribed(true);
    }
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await sendmail(email);

      if (response.status === 200) {
        console.log('Email sent successfully');
        setIsSubscribed(true);
        localStorage.setItem('isSubscribed', 'true'); 
      } else {
        console.error('Error while sending the mail:', response.statusText);
        alert('Failed to subscribe.');
      }
    } catch (error) {
      console.error('Error while sending the mail:', error.message);
      // alert('Failed to subscribe.');
      setError('This email has been already subscribed')
    }

    setEmail('');
  };

  return (
    <div className="newsletter">
      <h3>FREE E-NEWSLETTER</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={handleChange}
          required
          disabled={isSubscribed}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          disabled={isSubscribed}
          style={{
            backgroundColor: isSubscribed ? '#ccc' : '#007BFF',
            color: isSubscribed ? '#666' : '#FFF',
            cursor: isSubscribed ? 'not-allowed' : 'pointer',
            opacity: isSubscribed ? 0.6 : 1,
          }}
        >
          {isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
