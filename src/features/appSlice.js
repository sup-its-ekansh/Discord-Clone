import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  // console.log("***************");
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
      // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&");
      // console.log(state.channelName);
    },
  },
});
// console.log("//////////////////////////")
// console.log(appSlice.channelName);

export const { setChannelInfo } = appSlice.actions;
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;






