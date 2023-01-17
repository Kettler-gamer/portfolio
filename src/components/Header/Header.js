import React from "react";
import "../../styling/stylesheet/main.css";
import HeaderNav from "./HeaderNav";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">
        {"<Portfolio />"}
        <p className="title-subtext">Byggd med React!</p>
      </h1>
      <HeaderNav setPage={props.setPage} currentPage={props.currentPage} />
    </header>
  );
}

export default Header;