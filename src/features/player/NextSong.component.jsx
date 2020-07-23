import React from "react";

import { ReactComponent as PlaylistIcon } from "../../assets/icons/playlist_ico.svg";

const NextSong = () => (
  <div className="next-song">
    <button className="button button--blue">
      <PlaylistIcon
        className="button__icon"
        width="36"
        height="26"
      />
    </button>
    <div className="next-song__info">
      <span className="next-song__caption">Next</span>
      <div className="next-song__title-and-time">
        <div className="next-song__title">
          Livin' In A Movie
        </div>
        <div className="next-song__track-time">3:27</div>
      </div>
    </div>
  </div>
);

export default NextSong;
