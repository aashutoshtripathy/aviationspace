import React from "react";
import "../../src/App.css";
import { Link } from "react-router-dom";

const Oportunity = () => {
  const email = "george@aviationspace.in";

  return (
    <>
      <div className="opportunity">
        <h2>AviationSpace Connect</h2>
        <h4>Introducing : Aviationspace Connect</h4>
        <p>
          AviationSpace Connect is a premium facilitation service offered to our
          registered clients looking for Mergers, Acquisition, Diversification,
          Partnerships, Collaborative Ventures, Investments, Funding, Business
          Deals, Contracts, Contacts etc etc.
        </p>
        <p>
          All you are required to do is to reach out in confidence over email,
          directly to the CEO at <a href={`mailto:${email}`}> {email}</a> and
          spell out your requirements.
        </p>
        <p>
          With wide ranging contacts and personal connections with the ‘who is
          who’ in the industry, we are ideally positioned to help you out in
          your quest. We shall divulge details only on a need-to-know basis,
          till there is adequate indication of feasibility and thereafter only
          proceed on obtaining your consent. Minor facilitations and assistance
          may be readily provided, purely on goodwill however, larger projects
          involving a greater degree of efforts may be priced on a case-to-case
          basis, depending on the level of difficulty, effort and/or time
          involved. Such cases would however be discussed and agreed upon
          apriori, be nominal, and payable only on completion of facilitation.
        </p>
        <p>
          <u>Disclaimer: </u>AviationSpace does not offer any assurances or
          guarantees that all cases will be taken up as requested. We reserve
          the right of refusal based on proprietary standards and policies.
          Cases deemed fit to be progressed shall be pursued in earnest however,
          it may not be always possible to find ready prospects. If not readily
          available, your requirements will be duly noted and taken up as and
          when feasible but it must be appreciated that there can be no
          assurances and/or guarantees that can be provided.
        </p>
        <Link to={`/manufacturing`}>
          Manufacturing Hi-Tech boats for domestic and international market
        </Link>
        <p>
          : An excellent opportunity exists for MSMEs with adequate capacity and
          funds
        </p>

        <p>
          to diversify into the blue skies market for Hi-Tech Small and Medium
          Special
        </p>
      </div>
      <div className="opportunity-one">
        <h4>
          <Link to={`/exelent`}>
            EXCELLENT GREENFIELD INVESTMENT OPPORTUNITY FOR MSMES TO FORAY INTO
            HI-TECH BOATS SPACE
          </Link>
          </h4>
          <p>Bangalore:</p>
      </div>
      <div className="opportunity-two">
        <h4>
          <Link to={`/joint`}>Joint Venture- Technology Transfer</Link>
        </h4>
        <p>
          : Joint Venture /Technology transfer is available from European Boat
          manufacturing Company that supplies advanced Boats to the Navies of
          various European countries.
        </p>
        <p>
          Products for the Navy include Fast Attack Boats, Search and Rescue
          Boats, High-Speed Patrol Boats, Underwater vessels, Unmanned vessels,
          etc.
        </p>
      </div>
    </>
  );
};

export default Oportunity;
