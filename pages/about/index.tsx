import Head from "next/head";
import React from "react";
import styles from "../../styles/about.module.css";

interface Props {}

function About(props: Props) {
  return (
    <div>
      <h1 className={styles.header}>About - Book APP</h1>
    </div>
  );
}

export default About;
