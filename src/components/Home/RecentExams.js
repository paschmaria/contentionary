import React from "react";
import Placeholder from "../../assets/images/exam-placeholder.png";
import question_mark from "../../assets/images/question_mark.svg";
import task from "../../assets/images/task.svg";
import trophy from "../../assets/images/trophy.svg";

export default function RecentExams() {
  return (
    <>
      <div className="recentexams py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="recentexam__subtitle mb-0">STAY UP TO DATE</p>
              <h2 className="mb-4 mt-2 recentexam__title">
                Recently Updated Exams
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="recentexam__card">
                <img src={Placeholder} alt="" className="img-fluid" />
                <h5 className="recentexam__card--title mt-2">
                  Badagry Grammar School Exams
                </h5>

                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={question_mark} alt="" /> 10+ Questions
                    </p>
                  </div>
                  <div className="col">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={task} alt="" /> 0 Exams
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={trophy} alt="" /> 0 Leagues
                    </p>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="recentexam__card">
                <img src={Placeholder} alt="" className="img-fluid" />
                <h5 className="recentexam__card--title mt-2">
                  Badagry Grammar School Exams
                </h5>

                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={question_mark} alt="" /> 10+ Questions
                    </p>
                  </div>
                  <div className="col">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={task} alt="" /> 0 Exams
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={trophy} alt="" /> 0 Leagues
                    </p>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="recentexam__card">
                <img src={Placeholder} alt="" className="img-fluid" />
                <h5 className="recentexam__card--title mt-2">
                  Badagry Grammar School Exams
                </h5>

                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={question_mark} alt="" /> 10+ Questions
                    </p>
                  </div>
                  <div className="col">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={task} alt="" /> 0 Exams
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={trophy} alt="" /> 0 Leagues
                    </p>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="recentexam__card">
                <img src={Placeholder} alt="" className="img-fluid" />
                <h5 className="recentexam__card--title mt-2">
                  Badagry Grammar School Exams
                </h5>

                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={question_mark} alt="" /> 10+ Questions
                    </p>
                  </div>
                  <div className="col">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={task} alt="" /> 0 Exams
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col px-lg-0">
                    <p className="recentexam__card--subtitle my-2">
                      <img src={trophy} alt="" /> 0 Leagues
                    </p>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mt-5">
              <ul
                className="recentexam__tabs nav nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Public Centres
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Public Exams
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Public Leagues
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-courses-tab"
                    data-toggle="pill"
                    href="#pills-courses"
                    role="tab"
                    aria-controls="pills-courses"
                    aria-selected="false"
                  >
                    Online Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-publications-tab"
                    data-toggle="pill"
                    href="#pills-publications"
                    role="tab"
                    aria-controls="pills-publications"
                    aria-selected="false"
                  >
                    Publications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-audios-tab"
                    data-toggle="pill"
                    href="#pills-audios"
                    role="tab"
                    aria-controls="pills-audios"
                    aria-selected="false"
                  >
                    Audios
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="recentexam__card">
                        <img src={Placeholder} alt="" className="img-fluid" />
                        <h5 className="recentexam__card--title mt-2">
                          Badagry Grammar School Exams
                        </h5>

                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={question_mark} alt="" /> 10+ Questions
                            </p>
                          </div>
                          <div className="col">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={task} alt="" /> 0 Exams
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={trophy} alt="" /> 0 Leagues
                            </p>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="recentexam__card">
                        <img src={Placeholder} alt="" className="img-fluid" />
                        <h5 className="recentexam__card--title mt-2">
                          Badagry Grammar School Exams
                        </h5>

                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={question_mark} alt="" /> 10+ Questions
                            </p>
                          </div>
                          <div className="col">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={task} alt="" /> 0 Exams
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={trophy} alt="" /> 0 Leagues
                            </p>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="recentexam__card">
                        <img src={Placeholder} alt="" className="img-fluid" />
                        <h5 className="recentexam__card--title mt-2">
                          Badagry Grammar School Exams
                        </h5>

                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={question_mark} alt="" /> 10+ Questions
                            </p>
                          </div>
                          <div className="col">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={task} alt="" /> 0 Exams
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={trophy} alt="" /> 0 Leagues
                            </p>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="recentexam__card">
                        <img src={Placeholder} alt="" className="img-fluid" />
                        <h5 className="recentexam__card--title mt-2">
                          Badagry Grammar School Exams
                        </h5>

                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={question_mark} alt="" /> 10+ Questions
                            </p>
                          </div>
                          <div className="col">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={task} alt="" /> 0 Exams
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="col px-lg-0">
                            <p className="recentexam__card--subtitle my-2">
                              <img src={trophy} alt="" /> 0 Leagues
                            </p>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
