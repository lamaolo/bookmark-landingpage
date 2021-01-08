import React from "react";

import ImgTab from "../static/images/illustration-features-tab-1.svg";

const FeatureOne = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-6">
        <figure className="text-center">
          <img src={ImgTab} alt="Feature 1 illustration" />
        </figure>
      </div>
      <div className="col-6">
        <h2 className="subtitulo mb-0">Bookmark in one click</h2>
        <p className="parrafo my-4">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="btn blue">More Info</button>
      </div>
    </div>
  );
};

export default FeatureOne;
