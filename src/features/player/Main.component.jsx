import React from "react";

import Header from "./Header.component";
import TrackInfo from "./TrackInfo.component";
import ProgressBar from "./ProgressBar.component";
import Waveform from "./Waveform.component";
import NextSong from "./NextSong.component";

const Main = () => (
  <main className="main">
    <Header />
    <TrackInfo />
    <ProgressBar />
    <Waveform />
    <NextSong />
  </main>
);

export default Main;
