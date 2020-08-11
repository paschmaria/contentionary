import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-2 col-sm-6 col-12 about-widget footer-information">
            <Link to="index.html" className="footer__logo">
              <img
                width=""
                height=""
                src={logo}
                alt=""
                className="img-fluid footer__logo"
              />
            </Link>
          </div>

          <div className="col-lg-2 offset-lg-1 col-sm-6 col-12 footer-list aos-init aos-animate">
            <ul className="list-unstyled">
              <li className="my-2">
                <Link to="index.html">About us</Link>
              </li>
              <li className="my-2">
                <Link to="contact.html">Contact us</Link>
              </li>
              <li className="my-2">
                <Link to="privacy-policy.html">Support</Link>
              </li>
              <li className="my-2">
                <Link to="privacy-policy.html">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-sm-6 col-12 footer-list aos-init aos-animate">
            <ul className="list-unstyled">
              <li className="my-2 text-capitalize">
                <Link to="index.html">As A Marketplace</Link>
              </li>
              <li className="my-2 text-capitalize">
                <Link to="contact.html">for Human Resource</Link>
              </li>
              <li className="my-2 text-capitalize">
                <Link to="privacy-policy.html">for Companies</Link>
              </li>
              <li className="my-2 text-capitalize">
                <Link to="privacy-policy.html">for School</Link>
              </li>
              <li className="my-2 text-capitalize">
                <Link to="privacy-policy.html">Api</Link>
              </li>
              <li className="my-2 text-capitalize">
                <Link to="privacy-policy.html">Be a partner</Link>
              </li>
              <li className="my-2 text-capitalize">
                <Link to="privacy-policy.html">Hire our expertise</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 offset-lg-1 col-sm-6 col-12 footer-list aos-init aos-animate">
            <h5 className="footer__title">Contact</h5>
            <ul className="list-unstyled">
              <li className="my-4">
                4th & 5th Floor Fortune Towers, 27/29 Adeyemo Alakija Street,
                Victoria Island, Lagos, Nigeria.
              </li>
              <li className="my-2">
                <a href="tel:+234-01-7101060" className="phone">
                  +234-01-7101060
                </a>
              </li>
              <li className="my-2">
                <a href="tel:+234-01-4628946-9" className="phone">
                  +234-01-4628946-9
                </a>
              </li>
              <li className="my-2">
                <a href="tel:+234-01-2701162" className="phone">
                  +234-01-2701162
                </a>
              </li>

              <li className="my-2">
                <a
                  href="mailto: secretary@josephineconsulting.com.ng"
                  className="email mt-0"
                >
                  secretary@josephineconsulting.com.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="bg-white" />
        <div className="row">
          <div
            className="col-lg-8 col-sm-6 col-12 about-widget footer-information"
            data-aos="fade-up"
          >
            <p className="footer__description">
              Copyright © Contentionary 2020. All rights reserved
            </p>
          </div>

          <div
            className="col-lg-4 col-sm-6 col-12 about-widget footer-information text-right"
            data-aos="fade-up"
          >
            <p className="footer__description">
              <Link to="#">Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
