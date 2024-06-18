import React from 'react'
import '../../src/App.css'
import ComapanyCoursal from './ComapanyCoursal'

const Company = ({src,alt}) => {
  return (
    <div className='cours'>
        <section className='latest-news'>
        <h2>COMPANIES</h2>
        <ComapanyCoursal/>
        </section>
    </div>
  )
}

export default Company