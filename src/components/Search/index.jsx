import React from "react";
import styles from "./Search.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск пиццы..."
        className={styles.input}
      />
      <CiSearch className={styles.icon} />
      {searchValue && (
        <IoIosClose
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
