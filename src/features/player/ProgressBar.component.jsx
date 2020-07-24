import React from "react";

import { secondsToMMSS } from "../../helpers";

const ProgressBar = ({
  currentTime,
  currentTrackLength,
}) => (
  <div className="progress-bar">
    <span className="progress-bar__time">
      {secondsToMMSS(currentTime)}
    </span>
    <div className="progress-bar__body">
      <div
        className="progress-bar__progress"
        style={{
          width: `${
            (currentTime / currentTrackLength) * 100
          }%`,
        }}
      />
      <div className="progress-bar__line" />
      <div className="progress-bar__point" />
    </div>
    <span className="progress-bar__time">
      {secondsToMMSS(currentTrackLength)}
    </span>
  </div>
);

export default ProgressBar;
