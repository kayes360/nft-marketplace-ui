import React from "react";
import nft_list from "../assets/js/nftList.json";

export default function DiscoverNFT() {
  return (
    <section className="bg-light-grey pb-4 pt-5 section-six">
      <div className="container">
        <div className="row">
          <p className="title">Discover more NFTs</p>
          <div className="tag-list d-lg-flex d-md-flex d-sm-block d-block justify-content-between my-4">
            <div className="button-group filter-button-group">
              <button
                type="button"
                className="button btn m-2 px-3 rounded-pill btn-dark-blue"
                data-filter="*"
              >
                All Categories
              </button>

              <button
                type="button"
                className="button btn m-2 px-3 fw-bold rounded-pill btn-grey"
                data-filter=".art"
              >
                Art
              </button>
              <button
                type="button"
                className="button btn m-2 px-3 fw-bold rounded-pill btn-grey"
                data-filter=".celebrities"
              >
                Celebrities
              </button>
              <button
                type="button"
                className="button btn m-2 px-3 fw-bold rounded-pill btn-grey"
                data-filter=".gaming"
              >
                Gaming
              </button>
              <button
                type="button"
                className="button btn m-2 px-3 fw-bold rounded-pill btn-grey"
                data-filter=".sport"
              >
                Sport
              </button>
              <button
                type="button"
                className="button btn m-2 px-3 fw-bold rounded-pill btn-grey"
                data-filter=".music"
              >
                Music
              </button>
              <button
                type="button"
                className="button btn m-2 px-3 fw-bold rounded-pill btn-grey"
                data-filter=".crypto"
              >
                Crypto
              </button>
            </div>

            <button
              type="button"
              className="  btn px-3 fw-bold rounded-pill btn-grey filter-button"
            >
              <svg
                className="icon"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 16H14.6667V13.3333H9.33333V16ZM0 0V2.66667H24V0H0ZM4 9.33333H20V6.66667H4V9.33333Z"
                  fill="#371C87"
                />
              </svg>
              All Filters
            </button>
          </div>
          <div className="card-content-container">
            <div className="row justify-content-center filterContainer">
              {nft_list.map((nft) => {
                return (
                  // <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-4 filter-item ${category}">
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 col-12 my-4 filter-item "
                    key={nft.nftID}
                  >
                    <div className="card-content-wrapper mx-auto rounded-3 p-3 bg-white">
                      <div className="card-content-main-img">
                        <img
                          src={nft.main_img_link}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="peoples-container position-relative">
                          <div className="peoples position-absolute">
                            <div className="d-flex position-relative">
                              <div className="people position-absolute p-one">
                                <img
                                  src={nft.nft_avatar_one}
                                  className=" rounded-circle border border-white border-2"
                                  alt=""
                                />
                              </div>

                              <div className="people  position-absolute p-two">
                                <img
                                  src={nft.nft_avatar_two}
                                  className=" rounded-circle border border-white border-2"
                                  alt=""
                                />
                              </div>

                              <div className="people position-absolute p-three">
                                <img
                                  src={nft.nft_avatar_three}
                                  className=" rounded-circle border border-white border-2"
                                  alt=""
                                />
                              </div>

                              <div className="people position-absolute p-four">
                                <img
                                  src={nft.nft_avatar_four}
                                  className=" rounded-circle border border-white border-2"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="my-4 mx-3 fw-bolder card-content-title">
                          {nft.card_content_title}
                          {nft.category}
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex  justify-content-between">
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
                                  fill="#00ac4f"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_0_309">
                                  <rect width="15" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span className="fw-bold ms-2 text-green nft-value">
                              {nft.nft_value} ETH
                            </span>
                          </div>

                          <span className="text-grey">1 of 321</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <button
                            type="button"
                            className="btn px-3 fw-bold rounded-pill text-dark-blue btn-grey"
                          >
                            3h 50m 2s left
                          </button>
                          <p className="text-dark-blue fw-bold mb-0 pb-0">
                            Place a bid
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn px-3 rounded-pill btn-outline-dark-blue"
              >
                More NFTs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
