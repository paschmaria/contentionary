import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

export default function Header() {
  return (
    <>
      <div className="nav__wrapper">
        <nav className="navbar active_nav navbar-expand-lg navbar-dark py-md-0 fixd-top">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src={logo}
                alt="Business Logo"
                width=""
                className="img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-right landing-page">
                <li className="nav-item mx-md-4 my-md-0 postion-relative">
                  <a className="nav-link px-0 active" href="index.html">
                    <div className="text-center">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.29248 0.926834C0.29248 0.414958 0.707438 0 1.21931 0H7.47544C7.98732 0 8.40228 0.414958 8.40228 0.926834V9.50005C8.40228 10.0119 7.98732 10.4269 7.47544 10.4269H1.21931C0.707438 10.4269 0.29248 10.0119 0.29248 9.50005V0.926834Z"
                          fill="white"
                        />
                        <path
                          d="M10.7194 0.926834C10.7194 0.414958 11.1343 0 11.6462 0H17.9023C18.4142 0 18.8292 0.414958 18.8292 0.926834V4.86588C18.8292 5.37775 18.4142 5.79271 17.9023 5.79271H11.6462C11.1343 5.79271 10.7194 5.37775 10.7194 4.86588V0.926834Z"
                          fill="white"
                        />
                        <path
                          d="M0.29248 13.6708C0.29248 13.1589 0.707438 12.744 1.21931 12.744H7.47544C7.98732 12.744 8.40228 13.1589 8.40228 13.6708V17.6098C8.40228 18.1217 7.98732 18.5367 7.47544 18.5367H1.21931C0.707438 18.5367 0.29248 18.1217 0.29248 17.6098V13.6708Z"
                          fill="white"
                        />
                        <path
                          d="M10.7194 9.03663C10.7194 8.52476 11.1343 8.1098 11.6462 8.1098H17.9023C18.4142 8.1098 18.8292 8.52476 18.8292 9.03663V17.6098C18.8292 18.1217 18.4142 18.5367 17.9023 18.5367H11.6462C11.1343 18.5367 10.7194 18.1217 10.7194 17.6098V9.03663Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Marketplace
                  </a>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0 mx-auto">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              <ul className="navbar-nav ml-auto landing-page">
                <li className="nav-item mx-md-4 my-md-0 postion-relative">
                  <Link
                    className="nav-link px-0 btn nav__button nav__button--login"
                    to="index.html"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item mx-md-4 my-md-0 postion-relative">
                  <Link
                    className="nav-link px-0 btn nav__button nav__button--signup"
                    to="contact.html"
                  >
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="submenu__wrapper">
          <div className="container d-none d-lg-block">
            <div className="row">
              <div className="col-lg-6">
                <p className="my-2 text-white">
                  <a href="">Own a Centre</a>
                </p>
              </div>

              <div className="col-lg-6 text-right">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item my-2 mx-lg-4">
                    <Link to="#" className="text-white">
                      Features
                    </Link>
                  </li>
                  <li className="list-inline-item my-2 mx-lg-4">
                    <Link to="#" className="text-white">
                      Pricing
                    </Link>
                  </li>
                  <li className="list-inline-item my-2 mx-lg-4">
                    <Link to="#" className="text-white">
                      Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="top__divider my-0" />
          </div>
        </div>
      </div>
    </>
  );
}
