import { SearchOutlined } from "@mui/icons-material";
import {
  Input,
  FormControl,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/reducers/homeReducer";
import styles from "../../styles/search.module.css";

interface Props {
  setValue: (a: string) => void;
  value: String;
}

function SearchBar(props: Props) {
  let { setValue, value = "" } = props;
  const dispatch = useDispatch();

  function handleChange(e: any) {
    setValue(e.target.value);
  }
  function handleClick() {
    dispatch(fetchBooks({ query: value }));
  }

  return (
    <FormControl
      classes={{ root: styles.formRoot }}
      sx={{ m: 1, width: "25ch" }}
      variant="standard"
    >
      <InputLabel htmlFor="filled-adornment-amount">
        Search a Books...
      </InputLabel>
      <Input
        type={"text"}
        value={value}
        onChange={handleChange}
        onKeyDown={(e: any) => {
          if (e.code === "Enter") {
            handleClick();
          }
        }}
        // onBlur={handleClick}
        // classes={{ root: styles.searchInput }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
              onMouseDown={handleClick}
              edge="end"
            >
              <SearchOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchBar;
