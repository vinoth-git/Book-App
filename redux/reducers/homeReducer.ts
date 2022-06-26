/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchBookById: any = createAsyncThunk(
  "homeReducer/fetchBooks",
  async (data: any, { dispatch }) => {
    try {
      let { id } = data;
      let { data: book } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCjvI1Fpf6lfmOZhg7GRfZ7Ju8ULjPw-dE&printType=books`
      );
      dispatch(storeBookDetail(book));
    } catch (error) {}
  }
);

export const Home = createSlice({
  name: "homeReducer",
  initialState: {
    bookList: {},
    bookDetail: {},
  },
  reducers: {
    storeBookList: (state, action) => {
      state.bookList = action.payload;
    },
    storeBookDetail: (state, action) => {
      state.bookDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeBookList, storeBookDetail } = Home.actions;

export default Home.reducer;
