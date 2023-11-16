import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // remove top 1 message when count goes above 10.
      state.messages.splice(LIVE_CHAT_COUNT, 1);

      //   state.messages.push(action.payload);
      // to put messages on start we use unshift

      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
