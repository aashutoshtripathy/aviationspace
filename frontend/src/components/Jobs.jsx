import React from 'react';
import { Link } from 'react-router-dom';

function Jobs({ title, description, src, link , alt}) {
  return (
    <div className="job-opportunity">
      <div className='job-img'>
      <img src={src} alt={alt}/>
      <h3><Link to={link}>{title}</Link></h3>
      </div>
      <p>{description}</p>
      <Link to={link}>Read More &gt;&gt;</Link>
    </div>
  );
}

export default Jobs;
