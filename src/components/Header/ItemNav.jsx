import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ItemNav(props) {
  const location = useLocation();

  function setPage() {
    props.setToggle !== undefined && props.setToggle(false);
  }

  return (
    <li className="list-item">
      <Link
        to={props.page}
        className="item-button"
        onClick={setPage}
        name={props.page}
        style={props.page === location.pathname ? { color: "#75e6da" } : {}}>
        {props.displayName}
      </Link>
    </li>
  );
}

export default ItemNav;
