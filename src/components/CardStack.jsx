import React from "react";
import HeroCardProfile from "/images/hero-card-profile.png";
import CurvedText from "./CurvedText";

export default function CardStack() {
  return (
    <div className="">
      <div className="hero-cards-wrapper position-relative">
        <div className="position-absolute">
          <div className=" hero-card-t mx-auto my-auto hero-card-t-one pt-3 px-4 position-relative">
            <p className="title fw-bold">Abstr Gradient NFT</p>
            <div className="d-flex align-items-center">
              <div className="title-img me-2">
                <img src={HeroCardProfile} alt="" className="img-fluid" />
              </div>
              <span className="name">Arkhan17</span>
            </div>

            <div className="bid-box p-3 mb-5  me-lg-0 me-md-0 me-sm-2 me-2  rounded-3 d-flex justify-content-between position-absolute bottom-0 start-50 translate-middle-x">
              <div className="current-bid">
                <p className="mb-0">Current Bid</p>
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
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_309">
                      <rect width="15" height="24" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="">0.25 ETH</span>
              </div>
              <div className="end-time">
                <p className="mb-0">Ends in</p>
                <span className="">12h 43m 42s</span>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute">
          <div className="hero-card-t mx-auto my-auto hero-card-t-two pt-3 px-4 position-relative">
            <p className="title fw-bold">Abstr Gradient NFT</p>
            <div className="d-flex align-items-center">
              <div className="title-img me-2">
                <img src={HeroCardProfile} alt="" className="img-fluid" />
              </div>
              <span className="name">Arkhan17</span>
            </div>
            <div className="bid-box mx-auto p-3 mb-5 rounded-3 d-flex justify-content-between position-absolute bottom-0">
              <div className="current-bid">
                <p className="mb-0">Current Bid</p>
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
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_309">
                      <rect width="15" height="24" />
                    </clipPath>
                  </defs>
                </svg>
                <span>0.25 ETH</span>
              </div>
              <div className="end-time">
                <p className="mb-0">Ends in</p>
                <span>12h 43m 42s</span>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute">
          <div className="hero-card-t mx-auto my-auto hero-card-t-three pt-3 px-4 position-relative">
            <p className="title fw-bold">Abstr Gradient NFT</p>
            <div className="d-flex align-items-center">
              <div className="title-img me-2">
                <img src={HeroCardProfile} alt="" className="img-fluid" />
              </div>
              <span className="name">Arkhan17</span>
            </div>
            <div className="bid-box mx-auto p-3 mb-5 rounded-3 d-flex justify-content-between position-absolute bottom-0">
              <div className="current-bid">
                <p className="mb-0">Current Bid</p>
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
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_309">
                      <rect width="15" height="24" />
                    </clipPath>
                  </defs>
                </svg>
                <span>0.25 ETH</span>
              </div>
              <div className="end-time">
                <p className="mb-0">Ends in</p>
                <span>12h 43m 42s</span>
              </div>
            </div>
          </div>
        </div>

       <CurvedText/>
      </div>
    </div>
  );
}
