import React, { useEffect, useState } from 'react';
import { seniorr } from '../apiService';

const SeniorEngineer = () => {
  const [loadData, setLoadData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      console.log('Making API request');
      try {
        const response = await fetch('/api/seniorr');
        console.log('API request made');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        setLoadData(data.data);
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
        <h2>{loadData.tittle}</h2>
        <img src={loadData.image} alt="Job Opportunity" />
        {loadData.paragraph && loadData.paragraph.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </>
  )
}

export default SeniorEngineer