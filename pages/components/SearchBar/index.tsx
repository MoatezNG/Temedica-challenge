import React, { Dispatch, SetStateAction, useRef } from "react";

import styles from "./SearchBar.module.css";

interface ISearchBarProps {
  onType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setKeyword: Dispatch<SetStateAction<string>>;
  keyword: string;
}
const SearchBar = ({ onType, setKeyword, keyword }: ISearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onResetKeyword = () => {
    setKeyword("");
    ref.current.value = "";
  };
  return (
    <div className={styles.searchBarContainer}>
      <div>
        <h3>Search</h3>
        <div className={styles.searchContainer}>
          <input
            ref={ref}
            onChange={onType}
            className={styles.searchBar}
            type="text"
            placeholder="You can search by drug name or disease"
          />
          {keyword && (
            <div
              tabIndex={0}
              onClick={onResetKeyword}
              role="button"
              onKeyPress={onResetKeyword}
              className={styles.resetButton}
            >
              X
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
