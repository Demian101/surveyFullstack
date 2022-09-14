import {createSlice} from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "auth",
  initialState: () => {
    return {
      wordSliceId: '',
    }
  },
  reducers: {
    setCurrentWord (state, action) {
      state.WordId = action.payload.WordId
      // return action.payload;
    },
  },
});

export const {
  setCurrentWord,
} = wordSlice.actions;