import React from "react";
import appStore from "../../assets/images/Download_on_the_App_Store_Badge.svg";
import googleStore from "../../assets/images/google-play-badge.svg";
import phoneMockup from "../../assets/images/contentionary-phone-.png";

export default function Download() {
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <h2 className="app__title mb-3">
                Get Access to the world Largest Repository of Professional Exams
                on your mobile phone
              </h2>

              <ul className="list-unstyled">
                <li className="list-inline-item">
                  <img src={appStore} className="my-4" alt="" width="140" />
                </li>
                <li className="list-inline-item">
                  <img src={googleStore} className="my-4" alt="" width="140" />
                </li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 text-center">
              <img src={phoneMockup} className="img-fluid mt-4" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
