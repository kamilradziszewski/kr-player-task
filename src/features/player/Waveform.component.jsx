import React from "react";

const Waveform = ({ currentTime, currentTrackLength }) => (
  <div className="waveform">
    <div className="waveform__image" />
    <div
      className="waveform__mask"
      style={{
        width: `calc(100% - ${
          (currentTime / currentTrackLength) * 100
        }%)`,
        transitionDuration: `${
          currentTime === 0 ? "0.01s" : "1s"
        }`,
      }}
    />
  </div>
);

export default Waveform;
