import React from "react";

import Header from "./Header.component";
import ProgressBar from "./ProgressBar.component";
import Waveform from "./Waveform.component";
import NextSong from "./NextSong.component";

const Main = () => (
  <main className="main">
    <Header />
    <ProgressBar />
    <Waveform />
    <NextSong />
  </main>
);

export default Main;
