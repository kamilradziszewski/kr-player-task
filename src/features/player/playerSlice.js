import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    isPlaying: false,
  },
  reducers: {
    toggleIsPlaying: (state) => {
      console.log("abc");
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { toggleIsPlaying } = playerSlice.actions;

export const selectIsPlaying = (state) =>
  state.player.isPlaying;

export default playerSlice.reducer;
