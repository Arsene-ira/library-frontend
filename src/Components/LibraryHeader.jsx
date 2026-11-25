import React from "react";
import { Link } from "react-router";

function LibraryHeader() {
  const libHeader = "Library Management System";
  return (
    <div>
      <header>
        <Link to="/" style={{ marginLeft: "10px" }}>
          LOGOUT
        </Link>
        <Link to="/books" style={{ marginLeft: "10px" }}>
          BOOKS
        </Link>
        <Link to="/office" style={{ marginLeft: "10px" }}>
          OFFICE
        </Link>
        <Link to="/officelist" style={{ marginLeft: "10px" }}>
          OFFICE LIST
        </Link>
      </header>
    </div>
  );
}

export default LibraryHeader;
