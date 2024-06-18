import React from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const B2b = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const b2bDataa = async () => {
      console.log('Making API request');
      try {
        const response = await fetch('/api/b2bDataa');
        console.log('API request made');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        setAboutData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      }
    };

    b2bDataa();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className='b2b'>
        <h2>B2B Marketplace</h2>
        <h3>FIND THE RIGHT SUPPLIER</h3>
        <p>
          Aerospace and Defence products and Services offered by reputed Companies are listed below. Click on the titles to find the Company details and contact information.
        </p>

        <h3>INCREASE YOUR VISIBILITY</h3>
        <p>
          and target new customers. Listing is available to Aerospace & Defence Companies and Businesses which support the Industry.{' '}
          <Link to={`/contact`}>Contact us | The Aviationspace (aviationspaceindia.com)</Link>
        </p>

        <div>
          {aboutData.map((item) => (
            <div key={item.id} className='b2b-item'>
              <div>
                <Link>{item.name}</Link>
              </div>
              <div>
                <p>{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default B2b;
