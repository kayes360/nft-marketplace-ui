import React from "react";
export default function Card({ card }) {
  const {
    title,
    profileImage,
    profileName,
    currentBid,
    endTime,
    backgroundImage,
  } = card;
  return (
    <div
      className="hero-card-t mx-auto my-auto pt-3 px-4 d-flex flex-column"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <p className="title fw-bold">{title}</p>
        <div className="d-flex align-items-center">
          <div className="title-img me-2">
            <img src={profileImage} alt="" className="img-fluid" />
          </div>
          <span className="name">{profileName}</span>
        </div>
      </div>

      <div className="bid-box  p-3  rounded-3 ">
        <div className="d-flex justify-content-between align-items-center  ">
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
            <span className="mx-1">{currentBid}</span>
          </div>
          <div className="end-time">
            <p className="mb-0">Ends in</p>
            <span>{endTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
