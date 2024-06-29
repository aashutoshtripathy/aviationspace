// NewsDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import ClassifiedData from '../data/ClassifiedData'; 
import '../../src/App.css'
import { useState,useEffect } from 'react';


const ClassifiedDetails = () => {
  const { id } = useParams();
  const [aboutData, setAboutData] = useState(null);
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
        const classified = data.data.find(item => item.id === id);
        setAboutData(classified);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchClassifiedsData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const imagePath = `${import.meta.env.VITE_API_BASE_URL}/classifiedImages/${encodeURIComponent(aboutData.src)}`;


  return (
    <div className='App'>
    <div className="news-detail" key={aboutData.id}>
      <h2>{aboutData.title}</h2>
      <img src={imagePath} alt={aboutData.alt} />
      <p>{aboutData.date} - {aboutData.location}</p>
      <p>{aboutData.fdescription}</p>
    </div>
    </div>
  );
};

export default ClassifiedDetails;
