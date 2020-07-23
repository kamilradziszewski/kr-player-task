import React from "react";

const ProgressBar = () => (
  <div className="progress-bar">
    <span className="progress-bar__time">1:47</span>
    <div className="progress-bar__body">
      <div className="progress-bar__progress" />
      <div className="progress-bar__line" />
      <div className="progress-bar__point" />
    </div>
    <span className="progress-bar__time">4:21</span>
  </div>
);

export default ProgressBar;
