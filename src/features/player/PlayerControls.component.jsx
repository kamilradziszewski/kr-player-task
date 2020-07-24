import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleIsPlaying,
  selectIsPlaying,
} from "./playerSlice";

import { ReactComponent as ShuffleIcon } from "../../assets/icons/shuffle_ico.svg";
import { ReactComponent as PreviousIcon } from "../../assets/icons/previous_ico.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next_ico.svg";
import { ReactComponent as RepeatIcon } from "../../assets/icons/repeat_ico.svg";

import PlayActive from "../../assets/images/play_active.png";
import PlayInactive from "../../assets/images/play_inactive.png";

const PlayerControls = () => {
  const isPlaying = useSelector(selectIsPlaying);

  const dispatch = useDispatch();

  return (
    <div className="player-controls">
      <button className="button button--violet">
        <ShuffleIcon className="button__icon" />
      </button>
      <button className="button button--violet">
        <PreviousIcon className="button__icon" />
      </button>
      <button
        className="button button--violet player-controls__play-button"
        onClick={() => dispatch(toggleIsPlaying())}
      >
        <img
          src={PlayInactive}
          alt="Play button"
          className="play-image"
        />
        <img
          src={PlayActive}
          alt="Play button"
          className={`play-image play-image__active ${
            isPlaying ? "play-image--active" : ""
          }`}
        />
      </button>
      <button className="button button--violet">
        <NextIcon className="button__icon" />
      </button>
      <button className="button button--violet">
        <RepeatIcon className="button__icon" />
      </button>
    </div>
  );
};

export default PlayerControls;
