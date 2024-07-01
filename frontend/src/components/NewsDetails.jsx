import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../src/App.css';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      console.log('Making API request');
      try {
        const response = await fetch('/api/newsData');
        console.log('API request made');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);

        // Ensure data and data.data exist and log the structure of data.data
        if (!data || !data.data) {
          throw new Error('Invalid data format');
        }
        
        console.log('Data content:', data.data);

        let newsItems;

        // Determine the structure of data.data
        if (Array.isArray(data.data)) {
          newsItems = data.data;
        } else if (typeof data.data === 'object') {
          newsItems = Object.values(data.data);
        } else {
          throw new Error('Invalid data format');
        }

        const news = newsItems.find(item => item.id === id);
        if (news) {
          setNewsItem(news);
          setLoading(false);
        } else {
          throw new Error(`News item with id ${id} not found`);
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (error || !newsItem) {
    return <div>Error: {error || "News item not found!"}</div>; // Display specific error message
  }

  const imagePath = `${import.meta.env.VITE_API_BASE_URL}/newsImages/${encodeURIComponent(newsItem.src)}`;
  console.log('Image path:', imagePath); // Debugging log

  return (
    <div className='App'>
      <div className="news-detail" key={newsItem.id}>
        <h2>{newsItem.title}</h2>
        <img src={imagePath} alt={newsItem.alt} />
        <p>{newsItem.location}</p>
        {/* <p>{newsItem.date} - {newsItem.location}</p> */}
        {Array.isArray(newsItem.fdescription) ? (
          newsItem.fdescription.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))
        ) : (
          <p>{newsItem.fdescription}</p>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
