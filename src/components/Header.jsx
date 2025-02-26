import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <header className="">
      <div className="container d-flex justify-content-between align-items-center my-4">
        <div className="logo">
          <span className="logo-text">NFTERS</span>
        </div>
        <div className="vr d-lg-block d-md-none d-sm-none d-none"></div>

        <div className="d-lg-block d-md-none d-sm-none d-none nav_menu">
          <ul className="d-flex justify-content-between align-items-center mb-0 px-0">
            <li className="mx-3">Marketplace</li>
            <li className="mx-3">Resource</li>
            <li className="mx-3">About</li>
          </ul>
        </div>

        <div className="d-lg-block d-md-none d-sm-none d-none search">
          <div className="input-group search-bar">
            <input
              type="text"
              className="form-control rounded-end rounded-pill border-end-0"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <span
              className="input-group-text rounded-start rounded-pill"
              id="basic-addon1"
            >
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>

        <div className="d-lg-flex gap-2 d-md-none d-sm-none d-none button-segment">
          <button type="button" className="btn px-3 rounded-pill btn-dark-blue">
            Upload
          </button>
          <button
            type="button"
            className="btn px-3 rounded-pill btn-outline-dark-blue"
            style={{ border: "2px solid" }}
          >
            Connect Wallet
          </button>
        </div>

        <button
          className="d-lg-none d-md-block d-sm-block d-block navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbarLight"
          aria-controls="offcanvasNavbarLight"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbarLight"
          aria-labelledby="offcanvasNavbarLightLabel"
        >
          <div className="offcanvas-header">
            <div className="offcanvas-title" id="offcanvasNavbarLightLabel">
              <div className="logo">
                <span className="logo-text">NFTERS</span>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
            <hr />
          <div className="offcanvas-body">
            <div className="search my-3">
              <div className="input-group search-bar">
                <input
                  type="text"
                  className="form-control rounded-end rounded-pill border-end-0"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <span
                  className="input-group-text rounded-start rounded-pill"
                  id="basic-addon1"
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </div>
            <div className=" nav_menu">
              <ul className="mb-0 px-0 list-group mb-4">
                <li className=" list-group-item border-0">Marketplace</li>
                <li className=" list-group-item border-0">Resource</li>
                <li className=" list-group-item border-0">About</li>
              </ul>
            </div>

            <div className=" button-segment d-flex gap-2">
              <button
                type="button"
                className="btn px-3 rounded-pill btn-dark-blue"
              >
                Upload
              </button>
              <button
                type="button"
                className="btn px-3 rounded-pill btn-outline-dark-blue"
                style={{ border: "2px solid" }}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </header>
  );
}
