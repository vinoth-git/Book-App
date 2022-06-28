import { Button, CardMedia } from "@mui/material";
import React from "react";
import styles from "../../../styles/detail.module.css";

interface Props {
  data: any;
}

function Book(props: Props) {
  let { data } = props;
  let book = data && data.volumeInfo;
  return (
    <div className={styles.root}>
      <h1>{(book && book.title) || ""}</h1>
      <p className={styles.author}>
        by
        <span>
          {book &&
            book.authors &&
            book.authors.length > 0 &&
            ` - ${book.authors.join(" , ")}`}
        </span>
      </p>
      <CardMedia
        component={"img"}
        alt="Book Cover"
        src={book && book.imageLinks && book.imageLinks.thumbnail}
      />
      <div className={styles.Btns}>
        {book && book.infoLink && (
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              window.open(book.infoLink);
            }}
          >
            More Info
          </Button>
        )}
        {book && book.previewLink && (
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              window.open(book.previewLink);
            }}
          >
            Preview
          </Button>
        )}
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: (book && book.description) || "" }}
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
