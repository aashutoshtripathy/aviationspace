import React from 'react'
import logo from '../assets/logo.png'
import { Link , NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import '../../src/App.css';


const Header = () => {
  return (
    <>
    <div className='header'>
    <div className='logo'>
    <NavLink to={`/`}><img src={logo} alt={`Company Logo`} /></NavLink>
    </div>
    <div className='nav-links'>
    <ul>
        <li><NavLink to={`/classifiedss`} className={({ isActive }) => isActive ? "active-link" : ""} >Classifieds</NavLink></li>
        <li><NavLink to={`/b2b`} className={({ isActive }) => isActive ? "active-link" : ""} >B2B Marketplace</NavLink></li>
        <li><NavLink to={`/jobs`} className={({ isActive }) => isActive ? "active-link" : ""} >Jobs</NavLink></li>
        <li><NavLink to={`/about`} className={({ isActive }) => isActive ? "active-link" : ""} >About Us</NavLink></li>
        <li><NavLink to={`/newss`} className={({ isActive }) => isActive ? "active-link" : ""} >News</NavLink></li>
        <li><NavLink to={`/opportunities`} className={({ isActive }) => isActive ? "active-link" : ""} >AviationSpace Connect</NavLink></li>
        <li><NavLink to={`/contact`} className={({ isActive }) => isActive ? "active-link" : ""} >Contact us</NavLink></li>
        <li><NavLink to={``} ><SearchIcon/></NavLink></li>
    </ul>
    </div>
    </div>
    </>
  )
}

export default Header