import React, { useEffect, useState } from "react";
import { PropagateLoader } from 'react-spinners';
import { Link } from "react-router-dom";

const About = React.lazy(() => import('./About'));

const AboutWrapper = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {  
      console.log('Making API request');
      try {
        const response = await fetch('/api/about');
        console.log('API request made');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        setAboutData(data.data);
        localStorage.setItem('aboutData', JSON.stringify(data.data));
        localStorage.setItem('aboutDataTime', Date.now().toString());
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchAboutData();
  }, []);

  if (loading) {
    return <div> <PropagateLoader color="#36D7B7" loading={loading} size={15} /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
<div>
      <div className="about">
        <h2>{aboutData.title || 'THE AVIATIONSPACE'}</h2>
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p><Link to={aboutData.link}>Click here</Link> to join The AviationSpace Network and get a free email subscription to our e-Newsletter.</p>
      </div>
    </div>
  );
};

export default AboutWrapper;
