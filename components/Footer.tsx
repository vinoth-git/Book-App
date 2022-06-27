import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import styles from "../styles/home.module.css";

interface Props {}

export default function Footer(props: Props) {

  // Mock data
  let data = [
    {
      url: "https://instagram.com/vi_no_th_kum_ar/",
      Icon: Instagram,
      title: "Instagram",
    },
    {
      url: "https://www.linkedin.com/in/vinothkumar740/",
      Icon: LinkedIn,
      title: "LinkedIn",
    },
    {
      url: "https://twitter.com/svinoth_tweets",
      Icon: Twitter,
      title: "Twitter",
    },
  ];
  let Nav = [
    { url: "/home", title: "Home" },
    { url: "/home#Browse", title: "Browse" },
    { url: "/about", title: "About us" },
    { url: "/search?query=marvel", title: "Search" },
    { url: "/about#contact", title: "Contact us" },
  ];
  return (
    <div className={styles.footer}>
      <ul>
        {data.map((c) => (
          <li key={c.title}>
            <Link href={c.url}>
              <a target={"_blank"}>
                <c.Icon />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {Nav.map((c) => (
          <li key={c.title}>
            <Link href={c.url}>
              <a>{c.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p>COPYRIGHT © 2022 Vinothkumar. All rights Reserved.</p>
    </div>
  );
}
