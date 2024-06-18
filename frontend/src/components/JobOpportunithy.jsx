import React from 'react'
import { Link } from 'react-router-dom'
import JobData from '../data/JobData'

const JobOpportunithy = () => {
  return (
    <div className='JobOpportunithy'>
        <h2>JOB OPPORTUNITIES</h2>
        <p><b>Companies</b> may <Link to={'/contact'}>Submit</Link> their requirement for Aviation, Space and Defence industry professonals for us to inform suitable candidates to contact you.</p>
        {JobData.map((item,index) => (
            <div className='jobdata' key={index}>
                <img src={item.src} alt={item.alt}/>
                <Link to={item.link}>{item.title}</Link>
            </div>
        ))}
    </div>
  )
}

export default JobOpportunithy