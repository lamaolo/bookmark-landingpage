import React from "react";

import ImgTab from "../static/images/illustration-features-tab-2.svg";

const FeatureOne = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-6">
        <figure className="text-center">
          <img src={ImgTab} alt="Feature 1 illustration" />
        </figure>
      </div>
      <div className="col-6">
        <h2 className="subtitulo mb-0">Intelligent search</h2>
        <p className="parrafo my-4">
          Our powerful search featuer will help you find saved sited in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button className="btn blue">More Info</button>
      </div>
    </div>
  );
};

export default FeatureOne;
