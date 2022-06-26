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
    console.log(value * 40, "hiug");
    dispatch(fetchBooks({ query: queryValue, startIndex: value * 40 }));
  };

  return (
    <div className={styles.root}>
      <SearchBar setValue={setValue} value={queryValue} />
      {bookList &&
        bookList.items &&
        bookList.items.length > 0 &&
        bookList.items.map((c: any) => <BookTile key={c.id} data={c} />)}
      {bookList && bookList.totalItems && bookList.totalItems > 40 && (
        <Pagination
          count={Math.round(bookList.totalItems / 40)}
          color="primary"
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Search;
