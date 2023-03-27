import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import "./Nav.scss";

const Nav = () => {
  const [searchCoctail, setSearchCoctail] = useState("");
  return (
    <div className="nav">
      <Logo setSearchCoctail={setSearchCoctail} />
      <Search
        searchCoctail={searchCoctail}
        setSearchCoctail={setSearchCoctail}
      />
    </div>
  );
};

export default Nav;
