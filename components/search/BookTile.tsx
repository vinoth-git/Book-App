import { LinkRounded } from "@mui/icons-material";
import { CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";
import aliasImg from "../../assets/header.png";
import styles from "../../styles/search.module.css";

interface Props {
  data: any;
}

function BookTile(props: Props) {
  let { data } = props;
  let book: any = data && data.volumeInfo;
  return (
    <div className={styles.tileRoot}>
      <CardMedia
        component={"img"}
        alt={"Thumbnail Image"}
        src={
          (book && book.imageLinks && book.imageLinks.thumbnail) || aliasImg.src
        }
        className={styles.tileImg}
      />
      <div className={styles.tileContent}>
        <Link href={`/book/${(data && data.id) || ""}`}>
          <a>
            <p>
              {(book && book.title) || ""} <LinkRounded />
            </p>
            <p>
              {(book && book.publishedDate) || ""}
              <span>
                {book &&
                  book.authors &&
                  book.authors.length > 0 &&
                  ` - ${book.authors.join(" , ")}`}
              </span>
            </p>
            <p>
              {(book &&
                book.description &&
                `${book.description
                  .replace(/\s+/g, " ")
                  .split(/(?=\s)/gi)
                  .slice(0, 60)
                  .join("")}...`) ||
                ""}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BookTile;
