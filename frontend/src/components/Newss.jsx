import React, { useEffect, useState } from 'react';
import News from './News';

const Newss = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      console.log('Making API request');
      try {
        const response = await fetch('/api/newsData');
        console.log('API request made');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        setNewsData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can add a loading indicator here
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle error state
  }

  return (
    <>
      <div className='classifiedss'>
        {newsData.map((item, index) => (
          <News
            key={index}
            title={item.title}
            description={item.description}
            src={item.src}
            alt={item.alt}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Newss;
