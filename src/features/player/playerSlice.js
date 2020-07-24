import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    tracks: [
      {
        id: "QR5hRS2P",
        artist: "Steel Panther",
        album: "Feel the Steel",
        title: "The Shocker",
        length: 250,
      },
      {
        id: "YMN4fRdh",
        artist: "Kanye West",
        album: "Unreleased",
        title: "Self Conscious",
        length: 261,
      },

      {
        id: "rWor37zY",
        artist: "Kanye West",
        album: "Freshmen Adjustment",
        title: "Intro",
        length: 34,
      },
    ],
    currentTrack: 1,
    currentTime: 0,
  },
  reducers: {
    incrementCurrentTime: (state) => {
      state.currentTime++;
    },
  },
});

export const { incrementCurrentTime } = playerSlice.actions;

export const selectCurrentTime = (state) =>
  state.player.currentTime;
export const selectCurrentTrack = (state) =>
  state.player.tracks[state.player.currentTrack];

export default playerSlice.reducer;
