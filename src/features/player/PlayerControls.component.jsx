import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  incrementCurrentTime,
  resetCurrentTime,
  goToNextTrack,
} from "./playerSlice";

import { ReactComponent as ShuffleIcon } from "../../assets/icons/shuffle_ico.svg";
import { ReactComponent as PreviousIcon } from "../../assets/icons/previous_ico.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next_ico.svg";
import { ReactComponent as RepeatIcon } from "../../assets/icons/repeat_ico.svg";

import PlayActive from "../../assets/images/play_active.png";
import PlayInactive from "../../assets/images/play_inactive.png";

const PlayerControls = () => {
  const [timerID, setTimerID] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  const togglePlay = () => {
    if (!isPlaying) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  const startTimer = () => {
    setTimerID(
      setInterval(() => {
        dispatch(incrementCurrentTime());
      }, 1000)
    );
    setIsPlaying(true);
  };

  const stopTimer = () => {
    clearInterval(timerID);
    setTimerID(null);
    setIsPlaying(false);
  };

  const nextTrack = () => {
    stopTimer();
    dispatch(resetCurrentTime());
    dispatch(goToNextTrack());
    if (isPlaying) startTimer();
  };

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
        onClick={() => togglePlay()}
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
      <button
        className="button button--violet"
        onClick={() => nextTrack()}
      >
        <NextIcon className="button__icon" />
      </button>
      <button className="button button--violet">
        <RepeatIcon className="button__icon" />
      </button>
    </div>
  );
};

export default PlayerControls;
