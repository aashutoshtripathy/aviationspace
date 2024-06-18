import React from 'react';
import Jobs from './Jobs';
import Newsletter from './NewsLetter';
import img from '../assets/Job opportunity logo.jpg';


const JobOpportunities = () => {
  return (
    <section className="job-opportunities">
      <h2>JOB OPPORTUNITIES</h2>
      <Jobs
        src={img}
        alt={`img`}
        title="Senior Engineer - Aerospace..."
        description="Wanted for the Aerospace Division of an Engineering Component Manufacturing Company..."
        link="/jobs"
      />
      <Newsletter />
      <h2>AVIATIONSPACE CONNECT</h2>
      <Jobs
        description="Introduction: AviationSpace Connect is a premium facilitation service offered to our registered clients looking for Mergers"
        link="/opportunities"
      />
      <h2>A UNIQUE OPPORTUNITY TO INVEST IN THE BOOMING SECTORS</h2>
      <Jobs
        description="A profitable and highly scalable Electronic Product Design and Manufacturing Company with an impressive track record and an international Marquee clientele is looking for EQUITY INVESTMENT OF RS.10 CR. for strategic acquisition and to scale up the operations in the fast-growing domains of Aerospace, Defence, Healthcare, and Railways. 

                    Interested parties may get in touch with
                    george@avaiationspace.in
                    Mob: +91 9449833927 to know more."
      />
      <h2>WHITE PAPERS</h2>
      <Jobs
        title="WHITE PAPERS"
        description="NADCAP Certification AS 9100"
      />
    </section>
  );
};

export default JobOpportunities;
