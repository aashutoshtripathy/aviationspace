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
      try {
        const response = await fetch(`/api/newsData`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data); // Debugging output
        const news = data.data.find(item => item.id === id);
        setNewsItem(news); // Assuming data is structured correctly
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news item:', error);
        setError(error.message); // Set specific error message
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

  return (
    <div className='App'>
      <div className="news-detail" key={newsItem.id}>
        <h2>{newsItem.title}</h2>
        <img src={newsItem.src} alt={newsItem.alt} />
        <p>{newsItem.date} - {newsItem.location}</p>
        <p>{newsItem.fdescription}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
