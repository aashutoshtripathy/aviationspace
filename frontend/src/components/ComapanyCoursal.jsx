// src/components/ComapanyCoursal.jsx
import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { images } from "../apiService";
// import coursalImg from '../data/CoursalImg'
// import images from '../data/ImportImages'; // Adjust the path based on your project structure

const ComapanyCoursal = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClassifiedsData = async () => {
      console.log("Making API request");
      try {
        const response = await fetch("/api/images");
        console.log("API request made");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data);
        setAboutData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchClassifiedsData();
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {aboutData.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}${item.name}`}
                alt={`Image ${index}`}
                style={{ width: "30%" }}
              />
            </a>{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ComapanyCoursal;
