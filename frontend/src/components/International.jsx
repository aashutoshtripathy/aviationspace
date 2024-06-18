import React from 'react'
import { Link } from 'react-router-dom'

const International = ({title, src, alt, description}) => {
  return (
    <div className="classified-item">
        <div className='international'>
        <img src={src} alt={alt}/>
        <h3><Link>{title}</Link></h3>
        <p>{description}</p>
        <Link to="#">Read More &gt;&gt;</Link>
        </div>
    </div>   
  )
}

export default International