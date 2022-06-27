import React from "react";
import styles from "../../styles/home.module.css";
import FictionImg from "../../assets/fiction.webp";
import mysteryImg from "../../assets/mystery.webp";
import NonFiction from "../../assets/non-Fiction.webp";
import NovelImg from "../../assets/Novel.webp";
import ThrilllerImg from "../../assets/Thriller.webp";
import { CardMedia } from "@mui/material";
import Link from "next/link";

interface Props {}

export default function Browse(props: Props) {
  //Mock data
  let data = [
    {
      title: "Fiction",
      subTitle: "Browse fiction books",
      src: FictionImg.src,
    },
    {
      title: "Non-Fiction",
      subTitle: "Browse non fiction books",
      src: NonFiction.src,
    },
    {
      title: "Novels",
      subTitle: "Browse Novel books",
      src: NovelImg.src,
    },
    {
      title: "Mystery",
      subTitle: "Browse fiction books",
      src: mysteryImg.src,
    },
    {
      title: "Thriller",
      subTitle: "Browse fiction books",
      src: ThrilllerImg.src,
    },
  ];

  return (
    <div id="Browse" className={styles.browseRoot}>
      <h1>Browse books by genres</h1>
      <div className={styles.browseTiles}>
        {data.map((c) => (
          <Link key={c.src} href={`/search?query=${c.title}`}>
            <a>
              <CardMedia
                component={"img"}
                src={c.src}
                alt={"Browse Thumbnail"}
              />
              <p style={{ fontFamily: "Barlow-Bold" }}>{c.title}</p>
              <p style={{ fontFamily: "Barlow-Italic" }}>{c.subTitle}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
