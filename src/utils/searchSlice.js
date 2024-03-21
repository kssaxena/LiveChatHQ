import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "serach",
  initialState: {
    searchMessage: [],
    botReply: [],
  },
  reducers: {
    addSearchMessage: (state, action) => {
      state.searchMessage.push({
        message: action.payload,
        userType: "user",
      });
    },
    addBotReply: (state, action) => {
      state.searchMessage.push({
        message: action.payload,
        userType: "bot",
      });
    },
  },
});

export const { addSearchMessage, addBotReply } = searchSlice.actions;
export default searchSlice.reducer;
