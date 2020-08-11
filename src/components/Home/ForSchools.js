import React from "react";
import contentionaryForSchools from "../../media/images/contentionary-for-schools.png";

export default function ForSchools() {
  return (
    <>
      <div class="forschools">
        <div class="container">
          <div class="row align-center py-5">
            <div class="col-lg-5">
              <h6 class="forschools__subtitle">
                CUSTOMIZIED TO YOUR SCHOOL'S REQUIREMENT
              </h6>
              <h3 class="forschools__title my-4">Contentionary for Schools</h3>
              <p class="forschools__description">
                CBT with Free feature for entrance exams, inter-school
                competition, homework, assignment, holiday assignments, internal
                exams etc. which can be done from their exam centers.
              </p>

              <button class="btn forschools__button my-4">Learn More</button>
            </div>

            <div class="col-lg-5 offset-lg-2">
              <img
                src={contentionaryForSchools}
                class="img-fluid"
                alt="WEB-BASED TESTING TOOL"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
