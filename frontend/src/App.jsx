import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetails from './components/NewsDetails';
import Classified from './components/Classified';
import Jobs from './components/Jobs';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Company from './components/Company';
import JobOpportunities from './components/JobOpportunities';
import Contact from './components/Contact';
import About from './components/About';
import Experts from './components/Experts';
import Events from './components/Events';
import Oportunity from './components/Oportunity';
import Manufacturing from './components/Manufacturing';
import Exelent from './components/Exelent';
import Joint from './components/Joint';
import Classifiedss from './components/Classifiedss';
import ClassifiedDetails from './components/ClassifiedDetails';
import JobOpportunithy from './components/JobOpportunithy';
import Newss from './components/Newss';
import B2b from './components/B2b'
import SeniorEngineer from './components/SeniorEngineer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-container">
          <main>
            <div style={{display: 'flex'}}>
            <div className='homee'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news/:id" element={<NewsDetails />} />
              <Route path="/classified/:id" element={<ClassifiedDetails/>} />
              <Route path="/job/:id" element={<Jobs />} />
              <Route path="/about" element={<About />} />
              <Route path="/experts" element={<Experts />} />              
              <Route path="/events" element={<Events />} />              
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/opportunities' element={<Oportunity/>}/>
              <Route path='/manufacturing' element={<Manufacturing/>}/>
              <Route path='/exelent' element={<Exelent/>}/>
              <Route path='/joint' element={<Joint/>}/>
              <Route path='/classifiedss' element={<Classifiedss/>}/>
              {/* <Route path='/newss' element={<NewsDetails/>}/> */}
              <Route path="/newss" element={<Newss />} />
              <Route path='/jobs' element={<JobOpportunithy/>}/>
              <Route path='/b2b' element={<B2b/>}/>
              <Route path='/senior-engineer' element={<SeniorEngineer/>}/>
              

              
            </Routes>
            </div>
            <div className="job-opportunities">
            <JobOpportunities />
          </div>
          </div>
          </main>
        </div>
        <Company />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
