import React from "react";

import { useSelector } from "react-redux";

import {
  selectCurrentTrack,
  selectCurrentTime,
} from "./playerSlice";

import Header from "./Header.component";
import TrackInfo from "./TrackInfo.component";
import PlayerControls from "./PlayerControls.component";
import ProgressBar from "./ProgressBar.component";
import Waveform from "./Waveform.component";
import NextSong from "./NextSong.component";

const Main = () => {
  const currentTrack = useSelector(selectCurrentTrack);
  const currentTime = useSelector(selectCurrentTime);

  return (
    <main className="main">
      <Header {...currentTrack} />
      <TrackInfo {...currentTrack} />
      <PlayerControls {...currentTrack} />
      <ProgressBar
        currentTime={currentTime}
        currentTrackLength={currentTrack.length}
      />
      <Waveform
        currentTime={currentTime}
        currentTrackLength={currentTrack.length}
      />
      <NextSong />
    </main>
  );
};

export default Main;
