import React from "react";
import styles from "../../styles/about.module.css";
import aboutImg from "../../assets/about.png";
import { CardMedia } from "@mui/material";
import Link from "next/link";

interface Props {}

function About(props: Props) {
  return (
    <div>
      <CardMedia
        component={"img"}
        src={aboutImg.src}
        alt="Header Image"
        className={styles.headerImg}
      />
      <h1 className={styles.header}>About - Book APP</h1>
      <p className={styles.para}>
        Books are referred to as a man’s best friend. They are very beneficial
        for mankind and have helped it evolve. There is a powerhouse of
        information and knowledge. Books offer us so many things without asking
        for anything in return. Books leave a deep impact on us and are
        responsible for uplifting our mood. There are different genres of books
        available for book readers. Every day, thousands of books are released
        in the market ranging from travel books to fictional books. We can pick
        any book of our interest to expand our knowledge and enjoy the reading
        experience.
      </p>
      <div id="contact">
        {" "}
        <h1 className={styles.header}>Contact us</h1>
        <div className={styles.address}>
          <address>
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
          <address>
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
          <address>
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
        </div>
        <p className={styles.link}>
          <Link href={"mailto:svinothkumar740@gmail.com"}>
            <a target={"_blank"}>Click here to send mail to us.❤️</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
