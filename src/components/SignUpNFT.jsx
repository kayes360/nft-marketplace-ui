import React from 'react'
import HeroCardProfile from "/images/hero-card-profile.png"
import ProfileTwo from "/images/profile-two.png"

export default function SignUpNFT() {
  return (
    <section className="section-five my-5">
        <div className="container">
          <div className="row threebox">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 threebox-wrapper my-5 py-5">
              <div className="position-relative  ">
                <div className="position-absolute b-one">
                  <div
                    className="bottom-right-img bottom-right-img-one position-relative"
                  >
                    <div className="position-absolute corner-img mx-3">
                      <img
                        src={HeroCardProfile}
                        className="img-fluid rounded-circle border-3 border border-white"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="position-absolute b-two">
                  <div
                    className="bottom-right-img bottom-right-img-two position-relative"
                  >
                    <div className="position-absolute corner-img mx-4">
                      <img
                        src={ProfileTwo}
                        className="img-fluid rounded-circle border-3 border border-white"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="position-absolute b-three">
                  <div
                    className="bottom-right-img bottom-right-img-three position-relative float-end my-5"
                  >
                    <div className="position-absolute corner-img mx-4">
                      <img
                        src={ProfileTwo}
                        className="img-fluid rounded-circle border-3 border border-white"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="title">
                Create and <br />
                sell your NFTs
              </p>
              <p className="desc text-dark-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi ac phasellus placerat a pellentesque tellus sed
                egestas. Et tristique dictum sit tristique sed non. Lacinia
                lorem id consectetur pretium diam ut. Pellentesque eu sit
                blandit fringilla risus faucibus.
              </p>
              <button type="button" className="btn px-5 py-3 fw-bold rounded-pill btn-dark-blue">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </section> 
  )
}
