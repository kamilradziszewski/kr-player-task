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
    currentTrack: 2,
    currentTime: 0,
  },
  reducers: {
    incrementCurrentTime: (state) => {
      state.currentTime++;
    },
    resetCurrentTime: (state) => {
      state.currentTime = 0;
    },
    setCurrentTrack: (state, { payload }) => {
      state.currentTrack = payload;
    },
  },
});

export const {
  incrementCurrentTime,
  resetCurrentTime,
  setCurrentTrack,
} = playerSlice.actions;

export const selectCurrentTime = (state) =>
  state.player.currentTime;
export const selectCurrentTrack = (state) =>
  state.player.currentTrack;
export const selectTracksCount = (state) =>
  state.player.tracks.length;
export const selectCurrentTrackInfo = (state) =>
  state.player.tracks[state.player.currentTrack];

export default playerSlice.reducer;
