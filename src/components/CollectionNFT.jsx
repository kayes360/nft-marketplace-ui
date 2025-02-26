import React from 'react'

import SectionCardSampleOne from "/images/section-card-sample-one.png"
import HeroCardOne from "/images/hero-card-one.png"
import HeroCardTwo from "/images/hero-card-two.png"
import HeroCardThree from "/images/hero-card-three.png"
import ThumbOne from "/images/thumb-one.png"
import ThumbTwo from "/images/thumb-two.png"
import HeroCardProfile from "/images/hero-card-profile.png"
import MiniCardSampleOne from "/images/mini-card-sample-one.png"
import MiniCardSampleTwo from "/images/mini-card-sample-two.png"
import MiniCardSampleThree from "/images/mini-card-sample-three.png"

export default function CollectionNFT() {
  return (
    <section className="bg-light-grey py-5 section-three">
        <div className="container">
          <p className="section-four-title mb-5">Collection Featured NFTs</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="section-four-card-wrapper">
                <div
                  className="section-four-img-section-wrapper d-flex justify-content-between"
                >
                  <div className="section-four-main-img-wrapper">
                    <img
                      src={SectionCardSampleOne}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="section-four-thumb-img-wrapper me-3">
                    <img
                      src={HeroCardTwo}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                    <img
                      src={ThumbOne}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                    <img
                      src={ThumbTwo}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                  </div>
                </div>
                <div className="section-four-text-section-wrapper mt-3">
                  <p className="section-four-card-title fw-bold mb-0">
                    Amazing Collection
                  </p>
                  <div className="d-flex justify-content-between my-3">
                    <div className="">
                      <div className="left d-flex align-items-center">
                        <div className="title-img me-2">
                          <img
                            src={HeroCardProfile}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <p className="img-title mb-0 fw-bold">by Arkhanz</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="right">
                        <button
                          type="button"
                          className="btn px-3 rounded-pill btn-outline-bright-blue"
                        >
                          Total 54 Items
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="section-four-card-wrapper">
                <div
                  className="section-four-img-section-wrapper d-flex justify-content-between"
                >
                  <div className="section-four-main-img-wrapper">
                    <img
                      src={HeroCardOne}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="section-four-thumb-img-wrapper me-3">
                    <img
                      src={ThumbTwo}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                    <img
                      src={HeroCardTwo}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                    <img
                      src={HeroCardThree}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                  </div>
                </div>
                <div className="section-four-text-section-wrapper mt-3">
                  <p className="section-four-card-title fw-bold mb-0">
                    Amazing Collection
                  </p>
                  <div className="d-flex justify-content-between my-3">
                    <div className="">
                      <div className="left d-flex align-items-center">
                        <div className="title-img me-2">
                          <img
                            src={HeroCardProfile}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <p className="img-title mb-0 fw-bold">by Arkhanz</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="right">
                        <button
                          type="button"
                          className="btn px-3 rounded-pill btn-outline-bright-blue"
                        >
                          Total 54 Items
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="section-four-card-wrapper">
                <div
                  className="section-four-img-section-wrapper d-flex justify-content-between"
                >
                  <div className="section-four-main-img-wrapper">
                    <img
                      src={MiniCardSampleTwo}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="section-four-thumb-img-wrapper me-3">
                    <img
                      src={MiniCardSampleOne}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                    <img
                      src={MiniCardSampleThree}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                    <img
                      src={HeroCardTwo}
                      alt=""
                      className="img-fluid rounded mb-2"
                    />
                  </div>
                </div>
                <div className="section-four-text-section-wrapper mt-3">
                  <p className="section-four-card-title fw-bold mb-0">
                    Amazing Collection
                  </p>
                  <div className="d-flex justify-content-between my-3">
                    <div className="">
                      <div className="left d-flex align-items-center">
                        <div className="title-img me-2">
                          <img
                            src={HeroCardProfile}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <p className="img-title mb-0 fw-bold">by Arkhanz</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="right">
                        <button
                          type="button"
                          className="btn px-3 rounded-pill btn-outline-bright-blue"
                        >
                          Total 54 Items
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
