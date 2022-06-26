import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/reducers/homeReducer";
import HeaderImg from "../assets/header.png";
import styles from "../styles/home.module.css";
import { CardMedia } from "@mui/material";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <CardMedia
        component={"img"}
        src={HeaderImg.src}
        alt="Header Image"
        className={styles.headerImg}
      />
      <div className={styles.header}>
        <h1>Get your favorite book!</h1>
        <q>You can find yourself in the pages of book.</q>
      </div>
    </div>
  );
};

export default Home;
