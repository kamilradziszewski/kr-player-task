import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  incrementCurrentTime,
  resetCurrentTime,
  setCurrentTrack,
} from "./playerSlice";

import { ReactComponent as ShuffleIcon } from "../../assets/icons/shuffle_ico.svg";
import { ReactComponent as PreviousIcon } from "../../assets/icons/previous_ico.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next_ico.svg";
import { ReactComponent as RepeatIcon } from "../../assets/icons/repeat_ico.svg";

import PlayActive from "../../assets/images/play_active.png";
import PlayInactive from "../../assets/images/play_inactive.png";

const PlayerControls = ({
  currentTrack,
  tracksCount,
  currentTime,
  currentTrackLength,
}) => {
  const buttonRef = useRef();

  const [timerID, setTimerID] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTime === currentTrackLength + 1) {
      goToTrack("next");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

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

  const goToTrack = (nextTrack) => {
    stopTimer();
    dispatch(resetCurrentTime());

    if (!isRepeat) {
      if (isShuffle) {
        dispatch(setCurrentTrack(getRandomTrack()));
      } else {
        let track = currentTrack;

        if (nextTrack === "previous") {
          if (currentTrack === 0) {
            track = tracksCount - 1;
          } else {
            track--;
          }
        }

        if (nextTrack === "next") {
          if (currentTrack === tracksCount - 1) {
            track = 0;
          } else {
            track++;
          }
        }

        dispatch(setCurrentTrack(track));
      }
    }

    if (isPlaying) startTimer();
    buttonRef.current.focus();
  };

  const toggleIsRepeat = () => {
    if (!isRepeat) {
      setIsRepeat(true);
    } else {
      setIsRepeat(false);
      buttonRef.current.focus();
    }
  };

  const toggleIsShuffle = () => {
    if (!isShuffle) {
      setIsShuffle(true);
    } else {
      setIsShuffle(false);
      buttonRef.current.focus();
    }
  };

  const getRandomTrack = () => {
    let track = undefined;

    do {
      track = Math.floor(
        Math.random() * Math.floor(tracksCount)
      );
    } while (track === currentTrack);

    return track;
  };

  return (
    <div className="player-controls">
      <button
        className={`button button--violet ${
          isShuffle ? "button--active" : ""
        }`}
        onClick={() => toggleIsShuffle()}
      >
        <ShuffleIcon className="button__icon" />
      </button>
      <button
        className="button button--violet"
        onClick={() => goToTrack("previous")}
      >
        <PreviousIcon className="button__icon" />
      </button>
      <button
        className="button button--violet player-controls__play-button"
        onClick={() => togglePlay()}
        ref={buttonRef}
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
        onClick={() => goToTrack("next")}
      >
        <NextIcon className="button__icon" />
      </button>
      <button
        className={`button button--violet ${
          isRepeat ? "button--active" : ""
        }`}
        onClick={() => toggleIsRepeat()}
      >
        <RepeatIcon className="button__icon" />
      </button>
    </div>
  );
};

export default PlayerControls;
