// News.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const News = ({ id, src, alt, title, date, location, description }) => {





  return (
    <div className="news-item" key={id}>
      <div className='news-item1'>
        <div className='new-item-img'>
          <img src={src} alt={alt} />
        </div>
        <div className='news-item-title'>
          <h3>
            <Link to={`/news/${id}`}>{title}</Link>
            <p>{date} - {location}</p>
          </h3>
        </div>
      </div>
      
      <p>{description}</p>
      <Link to={`/news/${id}`}>Read More &gt;&gt;</Link>
    </div>
  );
};

export default News;
