import React from "react";

import { useSelector } from "react-redux";

import {
  selectCurrentTrackInfo,
  selectCurrentTime,
  selectCurrentTrack,
  selectTracksCount,
} from "./playerSlice";

import Header from "./Header.component";
import AlbumCovers from "./AlbumCovers.component";
import TrackInfo from "./TrackInfo.component";
import PlayerControls from "./PlayerControls.component";
import ProgressBar from "./ProgressBar.component";
import Waveform from "./Waveform.component";
import NextSong from "./NextSong.component";

const Main = () => {
  const currentTrackInfo = useSelector(
    selectCurrentTrackInfo
  );
  const currentTime = useSelector(selectCurrentTime);
  const currentTrack = useSelector(selectCurrentTrack);
  const tracksCount = useSelector(selectTracksCount);

  return (
    <main className="main">
      <Header {...currentTrackInfo} />
      <AlbumCovers
        currentTrack={currentTrack}
        tracksCount={tracksCount}
      />
      <TrackInfo {...currentTrackInfo} />
      <PlayerControls
        {...currentTrackInfo}
        currentTrack={currentTrack}
        tracksCount={tracksCount}
        currentTime={currentTime}
        currentTrackLength={currentTrackInfo.length}
      />
      <ProgressBar
        currentTime={currentTime}
        currentTrackLength={currentTrackInfo.length}
      />
      <Waveform
        currentTime={currentTime}
        currentTrackLength={currentTrackInfo.length}
      />
      <NextSong />
    </main>
  );
};

export default Main;
