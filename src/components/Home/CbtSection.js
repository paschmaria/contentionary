import React from "react";
import cbt_illustration from "../../assets/images/cbt_illustration.png";
export default function CbtSection() {
  return (
    <div>
      <div className="feature">
        <div className="container">
          <div className="row align-center py-5">
            <div className="col-lg-5">
              <h6 className="feature__subtitle">WEB-BASED TESTING TOOL</h6>
              <h3 className="my-4">CBT for Human Resource and Organizations</h3>
              <p className="feature__description">
                Cooperate Organizations can easily create secure online Exams &
                Assessments with advanced customization settings such as time
                limits, public & private test access more question types ect
              </p>

              <button className="btn feature__button my-4">Join Us Now</button>
            </div>

            <div className="col-lg-5 offset-lg-2">
              <img
                src={cbt_illustration}
                className="img-fluid"
                alt="WEB-BASED TESTING TOOL"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
