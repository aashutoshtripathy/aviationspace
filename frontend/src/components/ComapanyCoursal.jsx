// src/components/ComapanyCoursal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../src/App.css';

const ComapanyCoursal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        console.log('API response:', response.data); // Log the API response
        if (response.data && Array.isArray(response.data.data)) {
          setImages(response.data.data);
        } else {
          console.error('API response does not contain an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        {images.map((imageName, index) => (
          <div key={index}>
            <img src={`/images/${decodeURIComponent(imageName)}`} alt={`Image ${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ComapanyCoursal;
