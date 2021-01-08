import React from "react";

import ImgTab from "../static/images/illustration-features-tab-3.svg";

const FeatureOne = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-6">
        <figure className="text-center">
          <img src={ImgTab} alt="Feature 1 illustration" />
        </figure>
      </div>
      <div className="col-6">
        <h2 className="subtitulo mb-0">Share your bookmarks</h2>
        <p className="parrafo my-4">
          Easly share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <button className="btn blue">More Info</button>
      </div>
    </div>
  );
};

export default FeatureOne;
