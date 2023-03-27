import React from "react";
import "./Logo.scss";
import { search, validator } from "../Search/SearchSlice";
import { useDispatch } from "react-redux";

const Logo = ({ setSearchCoctail }) => {
  const dispatch = useDispatch();

  const handleLogoOnClick = () => {
    dispatch(search(""));
    dispatch(validator(false));
    setSearchCoctail("");
  };

  return <div onClick={handleLogoOnClick} className="logo"></div>;
};

export default Logo;
