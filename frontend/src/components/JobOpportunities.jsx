import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Jobs from './Jobs';
import Newsletter from './NewsLetter';
import img from '../assets/Job opportunity logo.jpg';
import { Link } from 'react-router-dom';


const JobOpportunities = () => {

  const [loadData, setLoadData] = useState({});
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
    <section className="job-opportunities">
      <h2>JOB OPPORTUNITIES</h2>
      <Jobs
        src={`${import.meta.env.VITE_API_BASE_URL}${loadData.image}`}
        alt={`img`}
        title={loadData.tittle}
        description={loadData.desc}
        link="/senior-engineer"
      />
      <Link to={`/jobs`}>Show more</Link>
      <Newsletter />
      <h2>AVIATIONSPACE CONNECT</h2>
      <Jobs
        description="Introduction: AviationSpace Connect is a premium facilitation service offered to our registered clients looking for Mergers"
        link="/opportunities"
      />
      <h2>A UNIQUE OPPORTUNITY TO INVEST IN THE BOOMING SECTORS</h2>
      <Jobs
        description="A profitable and highly scalable Electronic Product Design and Manufacturing Company with an impressive track record and an international Marquee clientele is looking for EQUITY INVESTMENT OF RS.10 CR. for strategic acquisition and to scale up the operations in the fast-growing domains of Aerospace, Defence, Healthcare, and Railways. 

                    Interested parties may get in touch with
                    george@avaiationspace.in
                    Mob: +91 9449833927 to know more."
      />
      <h2>WHITE PAPERS</h2>
      <Jobs
        title="WHITE PAPERS"
        description="NADCAP Certification AS 9100"
      />
    </section>
  );
};

export default JobOpportunities;
