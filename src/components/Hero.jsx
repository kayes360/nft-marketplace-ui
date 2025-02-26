import React from "react"; 
import CountUp from "react-countup"; 
import CardStackSlider from "./CardStackSlider/CardStackSlider";
 

export default function Hero() {
   

  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row">
          <div className="col-xxl 6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <p className="hero-main-text fs-1">
              DISCOVER,AND COLLECT DIGITAL ART NFTS
            </p>
            <p className="hero-sub-text">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <div>
              <button
                type="button"
                className="btn px-5 py-3 rounded-pill btn-dark-blue fw-bold"
              >
                Explore Now
              </button>
              <div className="counter-wrapper d-flex flex-start gap-4"> 
                  <div className="">
                    <span className="count counter">
                      <CountUp end={98} duration={5} /> K
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="">Artwork</p>
                  </div>
                  <div className="">
                    <span className="count counter">
                      <CountUp end={12} duration={5} />K
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="">Auction</p>
                  </div>
                  <div className="">
                    <span className="count counter">
                      <CountUp end={15} duration={5} />K
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="">Artist</p>
                  </div> 
              </div>
            </div>
          </div>
          <div className="col-xxl 6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
             {/* <CardStack/> */}
             <CardStackSlider/>
          </div>
        </div>
      </div>
    </section>
  );
}
