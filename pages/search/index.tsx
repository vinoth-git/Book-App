import { Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookTile from "../../components/search/BookTile";
import SearchBar from "../../components/search/SearchBar";
import { fetchBooks } from "../../redux/reducers/homeReducer";
import styles from "../../styles/search.module.css";

interface Props {}

function Search(props: Props) {
  const [queryValue, setValue] = React.useState("");
  const { bookList } = useSelector((state: any) => state.homeReducer);

  const dispatch = useDispatch();

  var query =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search);
  let val = query && query.has("query") ? query.get("query") : "";

  React.useEffect(() => {
    if (val) {
      setValue(val);
      dispatch(fetchBooks({ query: val }));
    }
  }, [dispatch, val]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(fetchBooks({ query: queryValue, startIndex: value * 40 }));
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.root}>
      <SearchBar setValue={setValue} value={queryValue} />
      {bookList && bookList.items && bookList.items.length > 0 ? (
        bookList.items.map((c: any) => <BookTile key={c.id} data={c} />)
      ) : (
        <h1
          style={{
            fontFamily: " Barlow-Regular",
            textAlign: "center",
            height: "50vh",
          }}
        >
          No books available. please use different terms!..
        </h1>
      )}
      {bookList && bookList.totalItems && bookList.totalItems > 40 ? (
        <Pagination count={10} color="primary" onChange={handleChange} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
