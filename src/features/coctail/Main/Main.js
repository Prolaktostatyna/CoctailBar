import React from "react";
import "./Main.scss";
import { selectSearchCoctail } from "../Nav/Search/SearchSlice";
import { useSelector } from "react-redux";
import CoctailsContainer from "./subfeatures/CoctailsContainer";
import StartPage from "./subfeatures/StartPage";

const Main = () => {
  const searchedCoctail = useSelector(selectSearchCoctail);

  return (
    <div className="main">
      {searchedCoctail.length > 0 ? (
        <CoctailsContainer searchedCoctail={searchedCoctail} />
      ) : (
        <StartPage />
      )}
    </div>
  );
};

export default Main;
