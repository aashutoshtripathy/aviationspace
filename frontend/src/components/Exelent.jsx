import React from "react";

const Exelent = () => {
    const email = "george@aviationspace.in";
  return (
    <>
      <div className="exelent">
        <h6>
          EXCELLENT GREENFIELD INVESTMENT OPPORTUNITY FOR MSMES TO FORAY INTO
          HI-TECH BOATS SPACE
        </h6>
        <p>
          An excellent opportunity exists for MSMEs with adequate capacity and
          funds to diversify into the blue skies market for Hi-Tech Small and
          Medium Special Purpose Boats, both for Domestic and International
          Markets.
        </p>
        <p>
          An established High-Tech International Boat Manufacturer is seeking
          manufacturing Tie-ups and ready to offer Transfer of
          Technology/licensing arrangements with Indian companies for achieving
          Cost Optimization, increase scale and efficiency for tapping the
          international market for a special purpose, unmanned and Electric
          contemporary Hi-Tech boats.
        </p>
        <p>
          Small and fast speedboats, both manned and unmanned operating in
          swarms present a new paradigm in Naval Warfare and could see vast
          demand in domestic as well as international markets in the near
          future. Additionally, there is increasing demand for medium sized
          special purpose boats for applications such as Search and Rescue,
          Pursuit, Patrolling, Mine Sweeping, Reconnaissance, Quick Reaction
          Teams, Anti-Submarine, Electronic warfare, Target Acquisition, Remote
          survey etc. The possibilities are endless and scope unlimited for
          those with sufficient scale and marketing wherewithal to foray into
          this space.
        </p>
        <p>
          Those Interested, for joint ventures, seed investment, supply of
          specific components, Composite hull fabrication and related services
          may please get in touch with <a href={`mailto:${email}`}> {email}</a>
        </p>
        <h4>Contact Details: </h4>
        <p> https://aviationspaceindia.com/content/contact-us</p>
      </div>
    </>
  );
};

export default Exelent;
