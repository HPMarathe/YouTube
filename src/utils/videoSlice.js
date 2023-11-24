import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    channelId: null,
  },
  reducers: {
    setChannnelId: (state, action) => {
      state.channelId = action.payload;
    },
    clearChannelId: (state) => {
      state.channelId = null;
    },
  },
});

export const { setChannnelId, clearChannelId } = videoSlice.actions;
export default videoSlice.reducer;
