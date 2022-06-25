/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks: any = createAsyncThunk(
  "homeReducer/fetchBooks",
  async (data: any, { dispatch, getState }) => {
    try {
    } catch (error) {}
  }
);

export const Home = createSlice({
  name: "homeReducer",
  initialState: {
    name: "this is name",
  },
  reducers: {
    storeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeName } = Home.actions;

export default Home.reducer;
