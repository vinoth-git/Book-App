/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all the books
export const fetchBooks: any = createAsyncThunk(
  "homeReducer/fetchBooks",
  async (data: any, { dispatch }) => {
    try {
      let { query = "marvel", startIndex = 0 } = data;
      let Url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCjvI1Fpf6lfmOZhg7GRfZ7Ju8ULjPw-dE&maxResults=40&projection=lite`;
      if (startIndex) {
        Url += `&startIndex=${startIndex}`;
      }
      let { data: books } = await axios.get(Url);
      dispatch(storeBookList(books));
    } catch (error) {}
  }
);

export const Home = createSlice({
  name: "homeReducer",
  initialState: {
    bookList: {},
  },
  reducers: {
    storeBookList: (state, action) => {
      state.bookList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeBookList } = Home.actions;

export default Home.reducer;
