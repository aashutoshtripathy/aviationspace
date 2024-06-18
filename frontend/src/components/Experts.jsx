import React from "react";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <>
      <div className="expert">
        <h2>EXPERT CONNECT</h2>
        <p>
          This is an opportunity for senior / retired professionals to offer
          their expertise for the benefit of the industry and keep themselves
          professionally active. Experienced professionals with Expertise in
          Aerospace and Defence domains are requested to contact us by sending
          your details and areas of expertise.
        </p>

        <p>
          Depending on the requirement the Expert consultant could offer their
          services over phone, by email, as short term assignments or as project
          based assignments.
        </p>

        <p>
          Companies that would like to avail expert services and the
          professionals who would like to offer their services may please
          contact us.
        </p>
        <h4>Contact Details:<Link to={'/contact'}>https://aviationspaceindia.com/content/contact-us</Link></h4>
      </div>
    </>
  );
};

export default Experts;
