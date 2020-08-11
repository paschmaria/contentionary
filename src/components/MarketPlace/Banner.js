import React from "react";
import { Link } from "react-router-dom";
import professionalExams from "../../media/images/professional-exams.png";

export default function Banner() {
  return (
    <div>
      <div class="banner">
        <div class="container">
          <div class="row align-center py-5">
            <div class="col-lg-5">
              <h2 class="banner__title my-4">
                Welcome to the world Largest Repository of{" "}
                <span>Professional Exams</span>
              </h2>
              <p class="banner__description">
                Have access to thousands of questions from verified examiners to
                practise with. Participate in Competition and stand a chance to
                win wonderful prices.
              </p>

              <button class="btn banner__button my-4">Create Account</button>
            </div>

            <div class="col-lg-5 offset-lg-2">
              <img
                src={professionalExams}
                class="img-fluid"
                alt="WEB-BASED TESTING TOOL"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
