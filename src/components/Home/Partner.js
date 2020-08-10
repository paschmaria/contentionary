import React from "react";

import gruen from "../../assets/images/gruen.png";
import ginel from "../../assets/images/ginel.png";
import paragon from "../../assets/images/paragon.png";
import trinity from "../../assets/images/trinity.png";

export default function Partner() {
  return (
    <div>
      <div className="partners">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3 className="partners__title mt-5 mb-4">
                Trusted by companies and schools of all sizes
              </h3>
            </div>
          </div>

          <div className="row my-5 py-5 justify-content-center">
            <div className="col-lg-3 text-center">
              <img src={gruen} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 text-center">
              <img src={ginel} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 text-center">
              <img src={paragon} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 text-center">
              <img src={trinity} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
