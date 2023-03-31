import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const appSlicer = createSlice({
  name: "stores",
  initialState,
  reducers: {
    actionItem: (state, action) => {
      state.value.push(action.payload);
    },
    clear: (state) => {
      state.value = [];
    },
    clearItem: (state, action) => {
      state.value.map((i) =>
        i.id === action.payload
          ? state.value.splice(state.value.indexOf(i), 1)
          : ""
      );
    },
  },
});

export const { actionItem, clear, clearItem } = appSlicer.actions;

export default appSlicer.reducer;
