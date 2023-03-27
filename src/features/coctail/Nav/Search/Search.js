import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, validator, selectInputValidator } from "./SearchSlice";
import "./Search.scss";

const Search = ({ searchCoctail, setSearchCoctail }) => {
  const dispatch = useDispatch();
  const inputValidator = useSelector(selectInputValidator);

  const handleOnClickBtn = () => {
    if (searchCoctail !== "") {
      dispatch(search(searchCoctail));
      dispatch(validator(false));
      setSearchCoctail("");
    } else dispatch(validator(true));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClickBtn();
    }
  };

  return (
    <div className="search">
      <div className="search__form">
        <input
          className="search__form--input"
          type="text"
          placeholder="Coctail name"
          value={searchCoctail}
          onChange={(e) => setSearchCoctail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search__form--btn" onClick={handleOnClickBtn}>
          Search
        </button>{" "}
      </div>
      {inputValidator ? (
        <p className="search__noDrink"> Enter the name of the coctail </p>
      ) : null}
    </div>
  );
};

export default Search;
