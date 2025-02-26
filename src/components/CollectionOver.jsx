import React from 'react'
import SectionCardSampleOne from "/images/section-card-sample-one.png"
import HeroCardProfile from "/images/hero-card-profile.png"
import MiniCardSampleOne from "/images/mini-card-sample-one.png"
import MiniCardSampleTwo from "/images/mini-card-sample-two.png"
import MiniCardSampleThree from "/images/mini-card-sample-three.png"
import SingleListSampleOne from "/images/single-list-sample-one.png"
import SingleListSampleTwo from "/images/single-list-sample-two.png"
import SingleListSampleThree from "/images/single-list-sample-three.png"
import SingleListSampleFour from "/images/single-list-sample-four.png"
import SingleListSampleFive from "/images/single-list-sample-five.png"

export default function CollectionOver() {
  return (
    <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="section-card-t-one-wrapper">
                <div className="section-card-t-one-main">
                  <img
                    src={SectionCardSampleOne}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div className="">
                    <div className="left d-flex">
                      <div className="title-img me-2">
                        <img
                          src={HeroCardProfile}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <p className="img-title mb-0 fw-bold">The Futr Abstr</p>
                        <p className="img-subtitle">10 in the stock</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="right">
                      <p className="mb-0">Highest Bid</p>
                      <svg
                        width="15"
                        height="24"
                        viewBox="0 0 15 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_0_309)">
                          <path
                            d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_309">
                            <rect width="15" height="24" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="fw-bold">0.25 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-between">
                <div className="mini-card-wrapper-container">
                  <div
                    className="mini-card-wrapper d-flex justify-content-between align-items-center mb-4"
                  >
                    <div className="mini-card-img-wrapper pe-2">
                      <img
                        src={MiniCardSampleOne}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className=" ">
                      <p className="fw-bold">The Futr Abstr</p>
                      <div className="d-flex align-items-center mb-2">
                        <div className="title-img me-2">
                          <img
                            src={HeroCardProfile}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <button
                          type="button"
                          className="btn px-3 rounded btn-outline-green"
                        >
                          <svg
                            width="15"
                            height="24"
                            viewBox="0 0 15 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_0_309)">
                              <path
                                className="icon"
                                d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                                fill="#00ac4f"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_0_309">
                                <rect width="15" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                          0.25 ETH
                        </button>
                        <span className="ms-1">1 of 8</span>
                      </div>
                      <button
                        type="button"
                        className="btn px-3 rounded-pill btn-dark-blue"
                      >
                        Place a Bid
                      </button>
                    </div>
                  </div>
                  <div
                    className="mini-card-wrapper d-flex justify-content-between align-items-center mb-4"
                  >
                    <div className="mini-card-img-wrapper pe-2">
                      <img
                        src={MiniCardSampleTwo}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className=" ">
                      <p className="fw-bold">The Futr Abstr</p>
                      <div className="d-flex align-items-center mb-2">
                        <div className="title-img me-2">
                          <img
                            src={HeroCardProfile}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <button
                          type="button"
                          className="btn px-3 rounded btn-outline-green"
                        >
                          <svg
                            width="15"
                            height="24"
                            viewBox="0 0 15 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_0_309)">
                              <path
                                className="icon"
                                d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                                fill="#00ac4f"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_0_309">
                                <rect width="15" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                          0.25 ETH
                        </button>
                        <span className="ms-1">1 of 8</span>
                      </div>
                      <button
                        type="button"
                        className="btn px-3 rounded-pill btn-outline-dark-blue"
                      >
                        Place a Bid
                      </button>
                    </div>
                  </div>
                  <div
                    className="mini-card-wrapper d-flex justify-content-between align-items-center mb-4"
                  >
                    <div className="mini-card-img-wrapper pe-2">
                      <img
                        src={MiniCardSampleThree}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className=" ">
                      <p className="fw-bold">The Futr Abstr</p>
                      <div className="d-flex align-items-center mb-2">
                        <div className="title-img me-2">
                          <img
                            src={HeroCardProfile}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <button
                          type="button"
                          className="btn px-3 rounded btn-outline-green"
                        >
                          <svg
                            width="15"
                            height="24"
                            viewBox="0 0 15 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_0_309)">
                              <path
                                className="icon"
                                d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                                fill="#00ac4f"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_0_309">
                                <rect width="15" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                          0.25 ETH
                        </button>
                        <span className="ms-1">1 of 8</span>
                      </div>
                      <button
                        type="button"
                        className="btn px-3 rounded-pill btn-outline-dark-blue"
                      >
                        Place a Bid
                      </button>
                    </div>
                  </div>
                </div>
                <div className="vr d-lg-block d-md-none d-sm-none d-none"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="">
                <h4 className="fw-bold">TOP COLLECTIONS OVER</h4>
                <p className="text-dark-blue">Last 7 days</p>
              </div>
              <div className="list-section-wrapper">
                <div className="single-list-wrapper">
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="count">
                      <p className="fw-bold">1</p>
                    </div>

                    <div className="position-relative">
                      <img
                        src={SingleListSampleOne}
                        className="img-fluid list-section-img rounded-circle"
                        alt=""
                      />
                      <svg
                        className="position-absolute tick-badge"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.7479 12.3182L24.9345 10.2115C24.5879 9.8115 24.3079 9.06483 24.3079 8.5315V6.26483C24.3079 4.8515 23.1479 3.6915 21.7345 3.6915H19.4679C18.9479 3.6915 18.1879 3.4115 17.7879 3.06483L15.6812 1.2515C14.7612 0.464832 13.2545 0.464832 12.3212 1.2515L10.2278 3.07817C9.8278 3.4115 9.0678 3.6915 8.5478 3.6915H6.24114C4.8278 3.6915 3.6678 4.8515 3.6678 6.26483V8.54483C3.6678 9.06483 3.3878 9.8115 3.05447 10.2115L1.25447 12.3315C0.481136 13.2515 0.481136 14.7448 1.25447 15.6648L3.05447 17.7848C3.3878 18.1848 3.6678 18.9315 3.6678 19.4515V21.7315C3.6678 23.1448 4.8278 24.3048 6.24114 24.3048H8.5478C9.0678 24.3048 9.8278 24.5848 10.2278 24.9315L12.3345 26.7448C13.2545 27.5315 14.7612 27.5315 15.6945 26.7448L17.8012 24.9315C18.2012 24.5848 18.9479 24.3048 19.4812 24.3048H21.7479C23.1612 24.3048 24.3212 23.1448 24.3212 21.7315V19.4648C24.3212 18.9448 24.6012 18.1848 24.9479 17.7848L26.7612 15.6782C27.5345 14.7582 27.5345 13.2382 26.7479 12.3182ZM19.5479 11.4782L13.1079 17.9182C12.9212 18.1048 12.6679 18.2115 12.4012 18.2115C12.1345 18.2115 11.8812 18.1048 11.6945 17.9182L8.4678 14.6915C8.08114 14.3048 8.08114 13.6648 8.4678 13.2782C8.85447 12.8915 9.49447 12.8915 9.88113 13.2782L12.4012 15.7982L18.1345 10.0648C18.5212 9.67817 19.1612 9.67817 19.5479 10.0648C19.9345 10.4515 19.9345 11.0915 19.5479 11.4782Z"
                          fill="#1E93FF"
                        />
                      </svg>
                    </div>

                    <div className="">
                      <p className="fw-bold mb-0">CryptoFunks</p>
                      <div className="">
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              className="icon"
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="#000"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-dark-grey fw-bold">19,769.39</span>
                      </div>
                    </div>

                    <div className="">
                      <p className="fw-bold text-teal collection-percentage">
                        +26.52%
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="single-list-wrapper">
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="count">
                      <p className="fw-bold">2</p>
                    </div>

                    <div className="position-relative">
                      <img
                        src={SingleListSampleTwo}
                        className="img-fluid list-section-img rounded-circle"
                        alt=""
                      />
                      <svg
                        className="position-absolute d-none tick-badge"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.7479 12.3182L24.9345 10.2115C24.5879 9.8115 24.3079 9.06483 24.3079 8.5315V6.26483C24.3079 4.8515 23.1479 3.6915 21.7345 3.6915H19.4679C18.9479 3.6915 18.1879 3.4115 17.7879 3.06483L15.6812 1.2515C14.7612 0.464832 13.2545 0.464832 12.3212 1.2515L10.2278 3.07817C9.8278 3.4115 9.0678 3.6915 8.5478 3.6915H6.24114C4.8278 3.6915 3.6678 4.8515 3.6678 6.26483V8.54483C3.6678 9.06483 3.3878 9.8115 3.05447 10.2115L1.25447 12.3315C0.481136 13.2515 0.481136 14.7448 1.25447 15.6648L3.05447 17.7848C3.3878 18.1848 3.6678 18.9315 3.6678 19.4515V21.7315C3.6678 23.1448 4.8278 24.3048 6.24114 24.3048H8.5478C9.0678 24.3048 9.8278 24.5848 10.2278 24.9315L12.3345 26.7448C13.2545 27.5315 14.7612 27.5315 15.6945 26.7448L17.8012 24.9315C18.2012 24.5848 18.9479 24.3048 19.4812 24.3048H21.7479C23.1612 24.3048 24.3212 23.1448 24.3212 21.7315V19.4648C24.3212 18.9448 24.6012 18.1848 24.9479 17.7848L26.7612 15.6782C27.5345 14.7582 27.5345 13.2382 26.7479 12.3182ZM19.5479 11.4782L13.1079 17.9182C12.9212 18.1048 12.6679 18.2115 12.4012 18.2115C12.1345 18.2115 11.8812 18.1048 11.6945 17.9182L8.4678 14.6915C8.08114 14.3048 8.08114 13.6648 8.4678 13.2782C8.85447 12.8915 9.49447 12.8915 9.88113 13.2782L12.4012 15.7982L18.1345 10.0648C18.5212 9.67817 19.1612 9.67817 19.5479 10.0648C19.9345 10.4515 19.9345 11.0915 19.5479 11.4782Z"
                          fill="#1E93FF"
                        />
                      </svg>
                    </div>

                    <div className="">
                      <p className="fw-bold mb-0">Cryptix</p>
                      <div className="">
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              className="icon"
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="#000"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-dark-grey fw-bold">2,769.39</span>
                      </div>
                    </div>

                    <div className="">
                      <p className="fw-bold text-bright-red collection-percentage">
                        +10.52%
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="single-list-wrapper">
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="count">
                      <p className="fw-bold">3</p>
                    </div>

                    <div className="position-relative">
                      <img
                        src={SingleListSampleThree}
                        className="img-fluid list-section-img rounded-circle"
                        alt=""
                      />
                      <svg
                        className="position-absolute d-none tick-badge"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.7479 12.3182L24.9345 10.2115C24.5879 9.8115 24.3079 9.06483 24.3079 8.5315V6.26483C24.3079 4.8515 23.1479 3.6915 21.7345 3.6915H19.4679C18.9479 3.6915 18.1879 3.4115 17.7879 3.06483L15.6812 1.2515C14.7612 0.464832 13.2545 0.464832 12.3212 1.2515L10.2278 3.07817C9.8278 3.4115 9.0678 3.6915 8.5478 3.6915H6.24114C4.8278 3.6915 3.6678 4.8515 3.6678 6.26483V8.54483C3.6678 9.06483 3.3878 9.8115 3.05447 10.2115L1.25447 12.3315C0.481136 13.2515 0.481136 14.7448 1.25447 15.6648L3.05447 17.7848C3.3878 18.1848 3.6678 18.9315 3.6678 19.4515V21.7315C3.6678 23.1448 4.8278 24.3048 6.24114 24.3048H8.5478C9.0678 24.3048 9.8278 24.5848 10.2278 24.9315L12.3345 26.7448C13.2545 27.5315 14.7612 27.5315 15.6945 26.7448L17.8012 24.9315C18.2012 24.5848 18.9479 24.3048 19.4812 24.3048H21.7479C23.1612 24.3048 24.3212 23.1448 24.3212 21.7315V19.4648C24.3212 18.9448 24.6012 18.1848 24.9479 17.7848L26.7612 15.6782C27.5345 14.7582 27.5345 13.2382 26.7479 12.3182ZM19.5479 11.4782L13.1079 17.9182C12.9212 18.1048 12.6679 18.2115 12.4012 18.2115C12.1345 18.2115 11.8812 18.1048 11.6945 17.9182L8.4678 14.6915C8.08114 14.3048 8.08114 13.6648 8.4678 13.2782C8.85447 12.8915 9.49447 12.8915 9.88113 13.2782L12.4012 15.7982L18.1345 10.0648C18.5212 9.67817 19.1612 9.67817 19.5479 10.0648C19.9345 10.4515 19.9345 11.0915 19.5479 11.4782Z"
                          fill="#1E93FF"
                        />
                      </svg>
                    </div>
                    <div className="">
                      <p className="fw-bold mb-0">Frensware</p>
                      <div className="">
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              className="icon"
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="#000"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-dark-grey fw-bold">9,232.39</span>
                      </div>
                    </div>

                    <div className="">
                      <p className="fw-bold text-teal collection-percentage">
                        +2.52%
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="single-list-wrapper">
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="count">
                      <p className="fw-bold">4</p>
                    </div>

                    <div className="position-relative">
                      <img
                        src={SingleListSampleFour}
                        className="img-fluid list-section-img rounded-circle"
                        alt=""
                      />
                      <svg
                        className="position-absolute tick-badge"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.7479 12.3182L24.9345 10.2115C24.5879 9.8115 24.3079 9.06483 24.3079 8.5315V6.26483C24.3079 4.8515 23.1479 3.6915 21.7345 3.6915H19.4679C18.9479 3.6915 18.1879 3.4115 17.7879 3.06483L15.6812 1.2515C14.7612 0.464832 13.2545 0.464832 12.3212 1.2515L10.2278 3.07817C9.8278 3.4115 9.0678 3.6915 8.5478 3.6915H6.24114C4.8278 3.6915 3.6678 4.8515 3.6678 6.26483V8.54483C3.6678 9.06483 3.3878 9.8115 3.05447 10.2115L1.25447 12.3315C0.481136 13.2515 0.481136 14.7448 1.25447 15.6648L3.05447 17.7848C3.3878 18.1848 3.6678 18.9315 3.6678 19.4515V21.7315C3.6678 23.1448 4.8278 24.3048 6.24114 24.3048H8.5478C9.0678 24.3048 9.8278 24.5848 10.2278 24.9315L12.3345 26.7448C13.2545 27.5315 14.7612 27.5315 15.6945 26.7448L17.8012 24.9315C18.2012 24.5848 18.9479 24.3048 19.4812 24.3048H21.7479C23.1612 24.3048 24.3212 23.1448 24.3212 21.7315V19.4648C24.3212 18.9448 24.6012 18.1848 24.9479 17.7848L26.7612 15.6782C27.5345 14.7582 27.5345 13.2382 26.7479 12.3182ZM19.5479 11.4782L13.1079 17.9182C12.9212 18.1048 12.6679 18.2115 12.4012 18.2115C12.1345 18.2115 11.8812 18.1048 11.6945 17.9182L8.4678 14.6915C8.08114 14.3048 8.08114 13.6648 8.4678 13.2782C8.85447 12.8915 9.49447 12.8915 9.88113 13.2782L12.4012 15.7982L18.1345 10.0648C18.5212 9.67817 19.1612 9.67817 19.5479 10.0648C19.9345 10.4515 19.9345 11.0915 19.5479 11.4782Z"
                          fill="#1E93FF"
                        />
                      </svg>
                    </div>

                    <div className="">
                      <p className="fw-bold mb-0">PunkArt</p>
                      <div className="">
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              className="icon"
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="#000"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-dark-grey fw-bold">3,769.39</span>
                      </div>
                    </div>

                    <div className="">
                      <p className="fw-bold text-teal collection-percentage">
                        +1.52%
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="single-list-wrapper">
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="count">
                      <p className="fw-bold">5</p>
                    </div>

                    <div className="position-relative">
                      <img
                        src={SingleListSampleFive}
                        className="img-fluid list-section-img rounded-circle"
                        alt=""
                      />
                      <svg
                        className="position-absolute tick-badge d-none"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.7479 12.3182L24.9345 10.2115C24.5879 9.8115 24.3079 9.06483 24.3079 8.5315V6.26483C24.3079 4.8515 23.1479 3.6915 21.7345 3.6915H19.4679C18.9479 3.6915 18.1879 3.4115 17.7879 3.06483L15.6812 1.2515C14.7612 0.464832 13.2545 0.464832 12.3212 1.2515L10.2278 3.07817C9.8278 3.4115 9.0678 3.6915 8.5478 3.6915H6.24114C4.8278 3.6915 3.6678 4.8515 3.6678 6.26483V8.54483C3.6678 9.06483 3.3878 9.8115 3.05447 10.2115L1.25447 12.3315C0.481136 13.2515 0.481136 14.7448 1.25447 15.6648L3.05447 17.7848C3.3878 18.1848 3.6678 18.9315 3.6678 19.4515V21.7315C3.6678 23.1448 4.8278 24.3048 6.24114 24.3048H8.5478C9.0678 24.3048 9.8278 24.5848 10.2278 24.9315L12.3345 26.7448C13.2545 27.5315 14.7612 27.5315 15.6945 26.7448L17.8012 24.9315C18.2012 24.5848 18.9479 24.3048 19.4812 24.3048H21.7479C23.1612 24.3048 24.3212 23.1448 24.3212 21.7315V19.4648C24.3212 18.9448 24.6012 18.1848 24.9479 17.7848L26.7612 15.6782C27.5345 14.7582 27.5345 13.2382 26.7479 12.3182ZM19.5479 11.4782L13.1079 17.9182C12.9212 18.1048 12.6679 18.2115 12.4012 18.2115C12.1345 18.2115 11.8812 18.1048 11.6945 17.9182L8.4678 14.6915C8.08114 14.3048 8.08114 13.6648 8.4678 13.2782C8.85447 12.8915 9.49447 12.8915 9.88113 13.2782L12.4012 15.7982L18.1345 10.0648C18.5212 9.67817 19.1612 9.67817 19.5479 10.0648C19.9345 10.4515 19.9345 11.0915 19.5479 11.4782Z"
                          fill="#1E93FF"
                        />
                      </svg>
                    </div>

                    <div className="">
                      <p className="fw-bold mb-0">Art Crypto</p>
                      <div className="">
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              className="icon"
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="#000"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-dark-grey fw-bold">10,769.39</span>
                      </div>
                    </div>

                    <div className="">
                      <p className="fw-bold text-bright-red collection-percentage">
                        +2.52%
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
