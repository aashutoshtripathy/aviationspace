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

        const newsDataArray = Object.values(data.data).filter(item => typeof item === 'object');

        setNewsData(newsDataArray);
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
        {newsData.map((item, index) => {
         const imagePath = item.src ? `${import.meta.env.VITE_API_BASE_URL}/newsImages/${encodeURIComponent(item.src)}` : null;
         return(
          <News
            key={index}
            title={item.title}
            date={item.date}
            location={item.location}
            description={item.description}
            src={imagePath}
            alt={item.alt}
            id={item.id}
          />
          )
})}
      </div>
    </>
  );
};

export default Newss;
