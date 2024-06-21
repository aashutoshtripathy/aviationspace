import React, { useEffect, useState } from 'react';
import { seniorr } from '../apiService';
import '../../src/App.css'


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

  const email = loadData.email ? loadData.email : '';
  const mailto = `mailto:${email}`;

  const highlightText = (text) => {
    const highlightWords = [
      "Qualification:",
      "Experience:",
      "Knowledge in:",
      "Responsible for:"
    ];

    let highlightedText = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
    });

    return highlightedText;
  };

  return (
    <>
    <h2>{loadData.tittle}</h2>
    {loadData.image && <img src={`http://localhost:8000${loadData.image}`} alt="Job Opportunity" />}
    {loadData.paragraph && loadData.paragraph.map((para, index) => {
      const parts = para.split('Email your details to:');
      return (
        <p key={index}>
          <span dangerouslySetInnerHTML={{ __html: highlightText(parts[0]) }}></span>
          {parts[1] && (
            <>
              Email your details to: <a href={mailto}>{email}</a>
              {parts[1]}
            </>
          )}
        </p>
      );
    })}
  </>
  )
}

export default SeniorEngineer