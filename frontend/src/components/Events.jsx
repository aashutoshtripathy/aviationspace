// src/pages/Events.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const bounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const Events = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration purposes
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      className='events'
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h2>Events</h2>
      <motion.h4 variants={bounce}>Coming soon..........</motion.h4>
    </motion.div>
  );
};

export default Events;
