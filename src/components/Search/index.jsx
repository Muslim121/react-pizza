import React from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Search = ({ searchValue, setSearchValue }) => {
  const inputRef = React.useRef();

  const [value, setValue] = React.useState("");

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );
  const OnChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={OnChangeInput}
        placeholder="Поиск пиццы..."
        className={styles.input}
      />
      <CiSearch className={styles.icon} />
      {searchValue && (
        <IoIosClose onClick={onClickClear} className={styles.clearIcon} />
      )}
    </div>
  );
};

export default Search;
