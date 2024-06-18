import React, { useState, useEffect } from 'react';
import Classified from './Classified';
import { Link } from 'react-router-dom';

const Classifiedss = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClassifiedsData = async () => {  
      console.log('Making API request');
      try {
        const response = await fetch('/api/classifiedData');
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

    fetchClassifiedsData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='classifiedss'>
      <h2>Classifieds</h2>
      <p>INTERESTED IN REACHING OUT TO THE AEROSPACE & DEFENCE INDUSTRIES? <Link to={'/contact'}>Contact us</Link> </p>
      {aboutData.map((item, index) => (
        <Classified
          key={index}
          title={item.title}
          description={item.description}
          src={item.src}
          alt={item.alt}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Classifiedss;
