import React from "react";
import { Link } from "react-router-dom";

import question_mark from "../../assets/images/question_mark.svg";
import task from "../../assets/images/task.svg";
import trophy from "../../assets/images/trophy.svg";
import centerImage from "../../assets/images/center-card-image.png";

export default function RatedCenter() {
  return (
    <div>
      <div className="ratedcenter">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="ratedcenter__title">
                Our Highest Rated Learning Centres
              </h3>
            </div>
          </div>

          <div className="row my-4 justify-content-center">
            <div className="col-lg-5">
              <div className="ratedcenter__card d-flex">
                <div
                  className="col-4 ratedcenter__card--image"
                  style={{ backgroundImage: `url(${centerImage})` }}
                >
                  <div
                    className=""
                    style={{ backgroundImage: `url(${centerImage})` }}
                  ></div>
                </div>
                <div className="col-8">
                  <h5 className="my-3">Good is Good Examination Centre</h5>
                  <p className="font-weight-light">
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written
                    by Cice
                  </p>

                  <div className="d-flex">
                    <div className="col px-lg-0">
                      <p className="ratedcenter__card--subtitle my-2">
                        <img src={question_mark} alt="" /> 10+ Questions
                      </p>
                    </div>
                    <div className="col">
                      <p className="ratedcenter__card--subtitle my-2">
                        <img src={task} alt="" /> 0 Exams
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col px-lg-0">
                      <p className="ratedcenter__card--subtitle my-2">
                        <img src={trophy} alt="" /> 0 Leagues
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>

                  <Link className="btn ratedcenter__card--link px-0 mb-2">
                    Join Centre
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="ratedcenter__card d-flex">
                <div
                  className="col-4 ratedcenter__card--image"
                  style={{ backgroundImage: `url(${centerImage})` }}
                >
                  <div
                    className=""
                    style={{ backgroundImage: `url(${centerImage})` }}
                  ></div>
                </div>
                <div className="col-8">
                  <h5 className="my-3">Good is Good Examination Centre</h5>
                  <p className="font-weight-light">
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written
                    by Cice
                  </p>

                  <div className="d-flex">
                    <div className="col px-lg-0">
                      <p className="ratedcenter__card--subtitle my-2">
                        <img src={question_mark} alt="" /> 10+ Questions
                      </p>
                    </div>
                    <div className="col">
                      <p className="ratedcenter__card--subtitle my-2">
                        <img src={task} alt="" /> 0 Exams
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col px-lg-0">
                      <p className="ratedcenter__card--subtitle my-2">
                        <img src={trophy} alt="" /> 0 Leagues
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>

                  <Link className="btn ratedcenter__card--link px-0 mb-2">
                    Join Centre
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <Link className="ratedcenter__link">View Centres</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
