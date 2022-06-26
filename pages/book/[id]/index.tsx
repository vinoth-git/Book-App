import { CardMedia } from "@mui/material";
import React from "react";
import styles from "../../../styles/detail.module.css";

interface Props {
  data: any;
}

function Book(props: Props) {
  let { data } = props;
  let book = data && data.volumeInfo;
  console.log(data);
  return (
    <div className={styles.root}>
      <h1>{(book && book.title) || ""}</h1>
      <CardMedia
        component={"img"}
        alt="Book Cover"
        src={book && book.imageLinks && book.imageLinks.thumbnail}
      />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCjvI1Fpf6lfmOZhg7GRfZ7Ju8ULjPw-dE`
  );
  let data = await res.json();
  return { props: { data } };
}

export default Book;
