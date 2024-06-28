import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import News from '../components/News';
import Classified from '../components/Classified';
import { Link } from 'react-router-dom';
import '../../src/App.css';
import International from '../components/International';
import InternationalData from '../data/InternationalData';


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const Home = () => {
  const [ClassifiedData, setClassifiedData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [classifiedResponse, newsResponse] = await Promise.all([
          fetch('/api/classifiedData'),
          fetch('/api/newsData'),
        ]);

        if (!classifiedResponse.ok || !newsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const classifiedData = await classifiedResponse.json();
        const newsData = await newsResponse.json();

        const classifiedDataArray = Object.values(classifiedData.data).filter(item => typeof item === 'object');
        const newsDataArray = Object.values(newsData.data).filter(item => typeof item === 'object');

        setClassifiedData(classifiedDataArray);
        setNewsData(newsDataArray);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='home'>
      <motion.section
        className="latest-news"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>LATEST NEWS</motion.h2>
        {newsData.map((newsItem, index) => {
          const imagePath = newsItem.src ? `${import.meta.env.VITE_API_BASE_URL}/newsImages/${encodeURIComponent(newsItem.src)}` : null;
          return(
          <motion.div key={index} variants={slideInUp}>
            <News
              id={newsItem.id}
              src={imagePath}
              alt={newsItem.alt}
              title={newsItem.title}
              date={newsItem.date}
              location={newsItem.location}
              description={newsItem.description}
            />
          </motion.div>
          );
        })}
      </motion.section>

      <motion.section
        className="classifieds"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>
          <Link to={`/classifiedss`}>CLASSIFIEDS</Link>
        </motion.h2>
        {ClassifiedData.map((classifiedItem, index) => {
          const imagePath = classifiedItem.src ? `${import.meta.env.VITE_API_BASE_URL}/classifiedImages/${encodeURIComponent(classifiedItem.src)}` : null;
          return (
          <motion.div key={index} variants={slideInUp}>
            <Classified
              id={classifiedItem.id}
              title={classifiedItem.title}
              description={classifiedItem.description}
              src={imagePath}
              alt={classifiedItem.alt}
            />
          </motion.div>
          );
          })}
        <motion.div variants={zoomIn}>
          <Link> Show More</Link>
        </motion.div>
        <motion.h2 style={{ color: 'black' }} variants={fadeIn}>
          INTERNATIONAL NEWS
        </motion.h2>
        {InternationalData.map((internationalItem, index) => (
          <motion.div key={index} variants={slideInUp}>
            <International
              title={internationalItem.title}
              description={internationalItem.description}
              src={internationalItem.src}
              alt={internationalItem.alt}
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Home;
