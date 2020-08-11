import React from "react";

import education from "../../media/images/education.png";
import human_resources from "../../media/images/human_resources.png";
import field_service from "../../media/images/field_service.png";
import research from "../../media/images/research.png";

export default function Industries() {
  return (
    <>
      <div class="industries">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <p class="industries__toptitle mt-5">WHY WORK WITH US</p>
              <h3 class="industries__title my-3">Made For All Industries</h3>
              <p class="mt-3 mb-5 industries__description">
                Cooperate Organizations can easily create secure online Exams &
                Assessments with advanced customization settings such as time
                limits, public & private test access more question types ect
              </p>
            </div>
          </div>

          <div class="row pb-5">
            <div class="col-lg-3 my-3">
              <div class="industries__card">
                <img src={education} class="img-fluid mb-3 mt-4" alt="" />
                <h5>Education/School</h5>
                <div class="industries__divider"></div>
              </div>
            </div>

            <div class="col-lg-3 my-3">
              <div class="industries__card">
                <img src={human_resources} class="img-fluid mb-3 mt-4" alt="" />
                <h5>Human Resources</h5>
                <div class="industries__divider"></div>
              </div>
            </div>

            <div class="col-lg-3 my-3">
              <div class="industries__card">
                <img src={field_service} class="img-fluid mb-3 mt-4" alt="" />
                <h5>Field Service</h5>
                <div class="industries__divider"></div>
              </div>
            </div>

            <div class="col-lg-3 my-3">
              <div class="industries__card">
                <img src={research} class="img-fluid mb-3 mt-4" alt="" />
                <h5>Research</h5>
                <div class="industries__divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
