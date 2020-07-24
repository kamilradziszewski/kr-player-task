import React from "react";

const TrackInfo = ({ title, artist }) => (
  <div className="track-info">
    <span className="track-info__title">{title}</span>
    <span className="track-info__artist">{artist}</span>
  </div>
);

export default TrackInfo;
