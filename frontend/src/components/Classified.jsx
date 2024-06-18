import React from 'react';
import { Link } from 'react-router-dom';

function Classified({ title, description, src, alt, id }) {
  return (
    <>
    <div className="classified-item">
      <div className='classified-item-img'>
        {src && <img src={src} alt={alt} />}
      </div>
      <div className='classified-item-des'>
        <h3><Link  to={`/classified/${id}`}>{title}</Link></h3>
        
      </div>
      
    </div>
    <div className='cl-item'>
      <p>{description}</p>
      <Link to={`/classified/${id}`}>Read More &gt;&gt;</Link>
    </div>
    </>
  );
}

export default Classified;
