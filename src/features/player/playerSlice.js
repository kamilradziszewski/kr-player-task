import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
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

export default playerSlice.reducer;
